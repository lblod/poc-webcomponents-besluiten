
var PushNotifications = PushNotifications || {
    //var applicationServerPublicKey = '';
    serviceWorker: '/js/push/shared/sw-v8.js',
    servicescope: "/js/push/shared/",
    isSubscribed: false,
    applicationServerPublicKey: "",
    init: function () {
        var that = this;

        $(document).ready(function () {

            // Application Server Public Key defined in Views/Device/Create.cshtml
            if (typeof that.applicationServerPublicKey === 'undefined') {
                that.errorHandler('Vapid public key is undefined.');
                return;
            }
            if ('serviceWorker' in navigator) {
                $("#div-pushalerts-subscribe").removeClass("hidden");
                navigator.serviceWorker.register(that.serviceWorker, { scope: that.servicescope }).then(function (reg) {
                    // At this point, you can call methods that require an active
                    // service worker, like registration.pushManager.subscribe()
                    try {
                        reg.pushManager.getSubscription()
                            .then(function (subscription) {

                                isSubscribed = subscription;
                                if (isSubscribed) {
                                    $.ajax({
                                        async: true,
                                        type: 'POST',
                                        data: {
                                            'pushEndpoint': subscription.endpoint, 'pushP256DH': subscription.getKey('p256dh'), 'pushAuth': subscription.getKey('auth'), 'moduleID': $("#chk-pushalerts-subscribe").attr('data-moduleid'), 'contentDetailID': $("#chk-pushalerts-subscribe").attr('data-contentdetailid')
                                        },
                                        url: '/pushnotificatie/IsSubscribed/'
                                    }).done(function (action) {
                                        if (json === true) {
                                            $("#chk-pushalerts-subscribe").prop('checked', true);


                                        } else {
                                            $("#chk-pushalerts-subscribe").prop('checked', false);
                                        }
                                    });

                                } else {

                                    console.log('User is not yet subscribed to push notifications');
                                }
                            })
                            .catch(function (err) {
                                console.log('[req.pushManager.getSubscription] Unable to get subscription details.', err);
                            });
                    } catch (ex) {
                        $("#div-pushalerts-subscribe").addClass("hidden");
                    }

                });

            } else {
                $("#div-pushalerts-subscribe").addClass("hidden");

                console.log('Service workers are not supported.');
            }



        });

        $("#chk-pushalerts-subscribe").on("change", function () {

            if ($("#chk-pushalerts-subscribe:checked").length > 0) {
                Notification.requestPermission().then(function (status) {
                    if (status === 'denied') {
                        that.errorHandler('[Notification.requestPermission] Browser denied permissions to notification api.');
                    } else if (status === 'granted') {
                        // console.log('[Notification.requestPermission] Initializing service worker.');

                        that.initialiseServiceWorker();
                    }
                });
            } else {
                navigator.serviceWorker.register(that.serviceWorker, { scope: that.servicescope }).then(function (reg) {

                    reg.pushManager.getSubscription()
                        .then(function (subscription) {

                            isSubscribed = subscription;
                            if (isSubscribed) {
                                $.ajax({
                                    async: true,
                                    type: 'POST',
                                    data: {
                                        'pushEndpoint': subscription.endpoint, 'pushP256DH': subscription.getKey('p256dh'), 'pushAuth': subscription.getKey('auth'), 'moduleID': $("#chk-pushalerts-subscribe").attr('data-moduleid'), 'contentDetailID': $("#chk-pushalerts-subscribe").attr('data-contentdetailid'), 'Subscribe': $("#chk-pushalerts-subscribe:checked").length > 0
                                    },
                                    url: '/pushnotificatie/Abonneren/'
                                }).done(function (json) {
                                    if (json === "1") {
                                        //was laatste abo, echt uitschrijven
                                        subscription.unsubscribe().then(function () {


                                        });
                                    }
                                });


                            }
                        })
                        .catch(function (err) {
                            console.log('[req.pushManager.getSubscription] Unable to get subscription details.', err);
                        });
                });
            }

        });
    },
    initialiseServiceWorker: function () {
        var that = this;
        if ('serviceWorker' in navigator) {

            //navigator.serviceWorker.register(serviceWorker, { scope: "/js/push/sw" }).then(handleSWRegistration);
            navigator.serviceWorker.register(that.serviceWorker, { scope: that.servicescope }).then(function (reg) {
                var subscribeParams = { userVisibleOnly: true };

                //Setting the public key of our VAPID key pair.

                var applicationServerKey = that.urlB64ToUint8Array(that.applicationServerPublicKey);
                subscribeParams.applicationServerKey = applicationServerKey;

                reg.pushManager.subscribe(subscribeParams)
                    .then(function (subscription) {
                        isSubscribed = true;
                        var p256dh = that.base64Encode(subscription.getKey('p256dh'));
                        var auth = that.base64Encode(subscription.getKey('auth'));
                        $.ajax({
                            async: true,
                            type: 'POST',
                            data: {
                                'pushEndpoint': subscription.endpoint, 'pushP256DH': p256dh, 'pushAuth': auth, 'moduleID': $("#chk-pushalerts-subscribe").attr('data-moduleid'), 'contentDetailID': $("#chk-pushalerts-subscribe").attr('data-contentdetailid'), 'Subscribe': $("#chk-pushalerts-subscribe:checked").length > 0
                            },
                            url: '/pushnotificatie/Abonneren/'
                        }).done(function (json) {
                         
                        });
                    })
                    .catch(function (e) {
                        location.reload();
                        that.errorHandler('[subscribe] Unable to subscribe to push', e);
                    });


            });
        } else {
            that.errorHandler('[initialiseServiceWorker] Service workers are not supported in this browser.');
        }
    },

    errorHandler: function (message, e) {
        if (typeof e === 'undefined') {
            e = null;
        }

        console.error(message, e);
        $("#errorMessage").append('<li>' + message + '</li>').parent().show();
    },

    urlB64ToUint8Array: function (base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    },
    base64Encode: function (arrayBuffer) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
    }
};
