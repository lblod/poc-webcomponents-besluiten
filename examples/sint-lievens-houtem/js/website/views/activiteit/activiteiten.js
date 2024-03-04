$('input.form-control-date').on('input',function () {

    var input = $(this);
    if (input.val() !== $('#' + input.attr('id') + '_sumbit').val())
        Ajaxify.doRequest($(this));
 

});




//Icordis.DateControl.dateSelected = function (input) {
   
//    Ajaxify.doRequest(input);
   
//};

