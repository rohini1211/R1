(function (factory) {
    'use strict';
    factory(window.jQuery);
}(function ($) {
    'use strict';
    $.widget("ecosmob.puchaseInvoiceSelection", {
        _create: function () {
            var self = this;
            $.proxy(self._canPurchaseInvoice, self)();
        },

        _canPurchaseInvoice: function () {

            $("#can_purchase_invoice").change(function () {
                if (this.checked) {
                    $(this).val(1);
                } else {
                    $(this).val('');
                }
            });

            if ($("#can_purchase_invoice").prop("checked") == true) {
                $(this).val(1);
            } else {
                $(this).val('');
            }
        }

    });
}));

$(document).ready(function () {
    $("#customer-category-form").puchaseInvoiceSelection();
});

function viewaprroverlistpopup(cust_category_id) {
    $.ajax({
        type: 'POST',
        url: approverListUrl,
        data: {
            'cust_category_id': cust_category_id
        },
        success: function (resultData) {
            $("#customerCategoryApproverListModalView").html(resultData);
            $('#view-customer-category-approver-list').modal('show');
        }
    });
}