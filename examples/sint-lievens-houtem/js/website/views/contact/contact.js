var Website = Website || {};

Website.Contact = {
    timer: null,
    currentHourID: 0,
    activebtn: null,
    lang: '',
    init: function (currentHourID) {
        var that = this;
        that.lang = $('html').attr('lang');
        if (that.lang === 'nl') { that.lang = ''; } else {
            that.lang = '/' + that.lang;
        }

        if (currentHourID > 0) {

            that.currentHourID = currentHourID;

            $(document).on('blur', '#contact-date', function () {
                var input = $(this);
                var val = input.val();
                if (val === '') {
                    $('.hours-spotlight__list > .selected').removeClass('selected');
                } else {

                    if (that.validateDate(val)) {
                        that.Hours(val,true);
                    }
                }
            }).on('input', '#contact-date', function (e) {

                var input = $(this);
                var val = input.val();
                if (that.keyTimer !== null) {
                    clearTimeout(that.keyTimer);
                }
                e.preventDefault();
                if (that.validateDate(val)) {
                    setTimeout(function () { that.Hours(val,true); }, 500);
                }
            }).on('click', '[data-goto="hours"]', function () {

                that.activebtn = $(this).attr('id');
                that.Hours($(this).attr('data-date'),false);
                $('#contact-date').val('');
            }).on('click', "#btn-contact-pick-a-date", function (e) {
                e.preventDefault();
                that.showDatePicker();
            }).on('keyup', function (e) {
                var code = e.keyCode || e.which;

                if (code === 27) {   // esc
                    var cal = $('#contact-calendar');
                    if (!cal.hasClass('hidden')) {
                        cal.addClass('hidden');
                        $('#btn-contact-pick-a-date').focus().attr('aria-expanded', 'false').removeClass('active');
                    }

                }
            });

        }
    },

    Hours: function (selectedDate, isInput) {
        if (selectedDate !== '') {
            var that = this;
            clearTimeout(this.timer);
            $("#selecteddate-hours").removeClass('animate');
            var dataPost = { selectedDate: selectedDate, id: that.currentHourID, userInput : isInput };
            $.ajax({
                async: true,
                data: dataPost,
                url: that.lang + '/Contact/Hours/',
                type: 'POST'
            }).done(function (partialView) {
                $('#contact-hour-list').html(partialView);
                if (that.activebtn !== null) {
                    $('#' + that.activebtn).trigger('focus');
                }
                // $('.hours-info').matchHeight(true);                
            });
        }
    },
    validateDate: function (text) {
        if (!isNaN(Date.parse(text))) {
            return true;
        }
        if (text === undefined)
            return false;
        var dateregex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (!dateregex.test(text)) {
            dateregex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])$/;
            if (!dateregex.test(text)) {
                return false;
            }
        }
        return true;
    },
    showDatePicker: function () {
        var el = $("#contact-calendar"),
            elBtn = $('#btn-contact-pick-a-date');
        el.toggleClass('hidden');
        elBtn.toggleClass('active');
        if (!el.hasClass('hidden')) {

            $('#contact-date').trigger('focus');
            elBtn.attr('aria-expanded', 'true');
        } else {
            elBtn.attr('aria-expanded', 'false');
        }
    }

};



