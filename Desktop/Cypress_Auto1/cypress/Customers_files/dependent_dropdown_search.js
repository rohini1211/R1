// For Dependent Dropdown
(function (factory) {
    'use strict';
    factory(window.jQuery);
}(function ($) {
    'use strict';
    $.widget("ecosmob.dependentDropdownSearch", {
        _create: function () {
            var self = this;
            $.proxy(self._changeState, self)();
            $.proxy(self._changeCity, self)();
        },

        _changeState: function () {
            var self = this;
            $('#customermastersearch-country_id').on('change', function () {
                $.ajax({
                    type: 'POST',
                    url: stateUrl,
                    data: {'id': $('#customermastersearch-country_id').val()},
                    success: function (resultData) {
                        $("#customermastersearch-state_id").html(resultData);
                        $("#customermastersearch-state_id").selectpicker('refresh');
                        $('#customermastersearch-state_id').trigger('change');
                    }
                });
            });
        },

        _changeCity: function () {
            var self = this;
            $('#customermastersearch-state_id').on('change', function () {
                $.ajax({
                    type: 'POST',
                    url: cityUrl,
                    data: {'id': $('#customermastersearch-state_id').val()},
                    success: function (resultCities) {
                        $("#customermastersearch-city_id").html(resultCities);
                        $("#customermastersearch-city_id").selectpicker('refresh');

                    }
                });
            });
        },


    });
}));

$(document).ready(function () {
    $("#customer-master-search").dependentDropdownSearch();
});