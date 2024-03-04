//mark as read
setTimeout(function () {
    $.ajax({
        async: true,
        data: {
            id: $('.news-detail').data('id')
        },
        type: 'POST',
        url: '/Nieuws/Gelezen'
    });
}, 6000);