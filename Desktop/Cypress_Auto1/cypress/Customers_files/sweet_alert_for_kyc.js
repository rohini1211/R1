(function (factory) {
    'use strict';
    factory(window.jQuery);
}(function ($) {
    'use strict';
    $.widget("ecosmob.sweetAlertForKyc", {
        _init: function () {
            var self = this;
            $.proxy(self._confirm_alert, self)();
        },
        _confirm_alert: function () {
            var self = this;
            $('#confirm-kyc').on('click', function (e) {
                if ($('#select2-customerkyc-kyc_status-container').val() == '' && $('#customerkyc-kyc_verify_note').val() == '') {
                } else {
                    e.preventDefault();
                    Swal.fire({
                        title: '<u>Do you Verify,</u>',
                        html: '<b>- All the Profile Details <br>- Provided KYC Details ?<br></b>',
                        type: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Verified!',
                        confirmButtonClass: 'btn btn-primary',
                        cancelButtonClass: 'btn btn-danger ml-1',
                        buttonsStyling: false,
                    }).then(function (result) {
                        if (result.value) {
                            $('#customer-approve-kyc-active-form').submit();
                        }
                    })
                }
            });
        },
    });
}));

$(document).ready(function () {
    $("#customer-approve-kyc-form").sweetAlertForKyc();
});
