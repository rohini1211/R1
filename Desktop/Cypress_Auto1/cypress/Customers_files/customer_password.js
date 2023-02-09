// For Dependent Dropdown
(function (factory) {
    'use strict';
    factory(window.jQuery);
}(function ($) {
    'use strict';
    $.widget("ecosmob.customerPassword", {
        _init: function () {
            var self = this;
            $.proxy(self._initialize, self)();
        },

        _initialize: function () {
            $('.getNewPass').click(function () {
                var field = $(this).closest('div').find('input[rel="gp"]');
                field.val(randString(field));
            });

            $('.togglePassword').click(function () {
                var field = $(this).closest('div').find('input[rel="gp"]');

                if (field.attr('type') === 'text') {
                    field.attr('type', 'password');
                } else {
                    field.attr('type', 'text');
                }
            });
        },
    });
}));

$(document).ready(function () {
    $("#customer-master-form").customerPassword();
});
window.onload = function () {
    $('.getNewPass').click();
}

function randString(id) {
    var dataSet = $(id).attr('data-character-set').split(',');
    var text = '';
    var possible = '';

    if ($.inArray('a-z', dataSet) >= 0) {
        possible = 'abcdefghijklmnopqrstuvwxyz';
        for (var i1 = 0; i1 < 3; i1++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    if ($.inArray('A-Z', dataSet) >= 0) {
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i2 = 0; i2 < 3; i2++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    if ($.inArray('0-9', dataSet) >= 0) {
        possible = '0123456789';
        for (var i3 = 0; i3 < 3; i3++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    if ($.inArray('#', dataSet) >= 0) {
        possible = '%&*$#@';
        for (var i4 = 0; i4 < 3; i4++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    if ($.inArray('@', dataSet) >= 0) {
        possible = '_';
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        possible = 'abcdefghijklmnopqrstuvwxyz';
        for (var i5 = 0; i5 < 2; i5++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    return text.split('').sort(function () {
        return 0.5 - Math.random()
    }).join('');
}