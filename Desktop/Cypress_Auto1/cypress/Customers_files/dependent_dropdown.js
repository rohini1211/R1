// For Dependent Dropdown
(function (factory) {
    'use strict';
    factory(window.jQuery);
}(function ($) {
    'use strict';
    $.widget("ecosmob.dependentDropdown", {
        _create: function () {
            var self = this;
            $.proxy(self._changeState, self)();
            $.proxy(self._changeCity, self)();
           // $.proxy(self._changeSalesUser, self)();
        },

        _changeState: function () {
            var self = this;
            $('#customermaster-country_id').on('change', function () {
                $.ajax({
                    type: 'POST',
                    url: stateUrl,
                    data: {'id': $('#customermaster-country_id').val()},
                    success: function (resultData) {
                        $("#customermaster-state_id").html(resultData);
                        $("#customermaster-state_id").selectpicker('refresh');
                        $('#customermaster-state_id').trigger('change');
                    }
                });
            });
        },

        _changeCity: function () {
            var self = this;
            $('#customermaster-state_id').on('change', function () {
                $.ajax({
                    type: 'POST',
                    url: cityUrl,
                    data: {'id': $('#customermaster-state_id').val()},
                    success: function (resultCities) {
                        $("#customermaster-city_id").html(resultCities);
                        $("#customermaster-city_id").selectpicker('refresh');

                    }
                });
            });
        },

     /*   _changeSalesUser: function () {
            var self = this;
            $('#customermaster-cust_postal_code').on('keyup', function () {
                $.ajax({
                    type: 'POST',
                    url: salesUserUrl,
                    data: {'pincode': $('#customermaster-cust_postal_code').val()},
                    success: function (resultSalesuser) {
                        $("#customermaster-sales_manager_member_id").html(resultSalesuser);
                        //$("#customermaster-sales_manager_member_id").selectpicker('refresh');

                    }
                });
            });
        },*/

    });
}));

$(document).ready(function () {
    $("#customer-master-form").dependentDropdown();
    //$('#customermaster-cust_postal_code').trigger('keyup')
});