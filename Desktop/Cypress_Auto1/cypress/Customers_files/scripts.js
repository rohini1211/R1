/*
NOTE:
------
PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

/** Method isNumberKey()
 *
 * Allow to enter only numeric value in input
 *
 * @param evt object
 * @return boolean
 */
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var nAgt = navigator.userAgent;
    if ((verOffset = nAgt.indexOf("Firefox")) != - 1) {
        return ! (charCode > 39 && (charCode < 48 || charCode > 57));
    } else {
        return ! (charCode > 31 && (charCode < 48 || charCode > 57));
    }

}

/*Hide Flash message after 10 seconds*/
$(".top.right.alert").animate({opacity: 1.0}, 5000).fadeOut("slow");

/**
 * @param t
 * @param search_form_selector
 */
var change_records_per_page = function (t, search_form_selector) {
    $per_page = $(search_form_selector).find('input[name="per-page"]');
    if ($per_page.length) {
        $per_page.val(t.val());
    } else {
        $(search_form_selector).append('<input type="hidden" name="per-page" value="' + t.val() + '" >');
    }
    $(search_form_selector).submit();
};

$(document).ready(function () {

    if ($('#hidden_isread_count_url').length != 0) {
        setInterval(function () {
            $.ajax({
                url : $('#hidden_isread_count_url').html(),
                type : 'POST',
                success: function (data) {
                    var unread_notification_count = JSON.parse(data);
                    $('#notification_count_span').html(unread_notification_count);
                }
            })
        }, 60000);
    }
    $('.dropdown-toggle').children().removeClass('caret');
    $('[data-icons-prefix="fa"]').each(function () {
        var $this = $(this),
            $defaults = {
                'icons' : {
                    paginationSwitchDown : 'glyphicon-collapse-down icon-chevron-down',
                    paginationSwitchUp : 'glyphicon-collapse-up icon-chevron-up',
                    refresh : 'fa-refresh icon-refresh',
                    toggle : 'fa-building-o icon-list-alt',
                    columns : 'fa-bars icon-th',
                    detailOpen : 'fa-plus fa-plus',
                    detailClose : 'fa-minus fa-minus'
                }
            };
        $this.bootstrapTable($defaults);
    });
    $("table[data-search-placeholder]").each(function () {
        $(this).parents("div.bootstrap-table")
            .find("input[placeholder='Search']")
            .attr("placeholder", $(this).data("search-placeholder"));
    });
    $(document).on('change', 'input', function (e) {
        $('[data-toggle="popover"]').popover({
            container : "body",
            html : true,
            content: function () {
                return '<div class="popover-message">' + $(this).data("message") + '</div>';
            }
        });
    });
    $(document).ajaxStop(function () {
        $('span').removeClass('caret');
        //icon change
        $('[data-icons-prefix="fa"]').each(function () {
            var $this = $(this),
                $defaults = {
                    'icons' : {
                        paginationSwitchDown : 'glyphicon-collapse-down icon-chevron-down',
                        paginationSwitchUp : 'glyphicon-collapse-up icon-chevron-up',
                        refresh : 'fa-refresh icon-refresh',
                        toggle : 'fa-building-o icon-list-alt',
                        columns : 'fa-bars icon-th',
                        detailOpen : 'fa-plus fa-plus',
                        detailClose : 'fa-minus fa-minus'
                    }
                };
            $this.bootstrapTable($defaults);
        });
        $('[data-toggle="popover"]').popover({
            container : "body",
            html : true,
            content: function () {
                return '<div class="popover-message">' + $(this).data("message") + '</div>';
            }
        });
        $(function () {
            $('.dropdown-toggle').children().removeClass('caret');
            $(".bottom-scroll").scroll(function () {
                $(".top-scroll").scrollLeft($(".bottom-scroll").scrollLeft());
            });
            $(".top-scroll").scroll(function () {
                $(".bottom-scroll").scrollLeft($(".top-scroll").scrollLeft());
            });
        });
    });
    $(function () {
        $('.dropdown-toggle').children().removeClass('caret');
        $(".bottom-scroll").scroll(function () {
            $(".top-scroll").scrollLeft($(".bottom-scroll").scrollLeft());
        });
        $(".top-scroll").scroll(function () {
            $(".bottom-scroll").scrollLeft($(".top-scroll").scrollLeft());
        });
    });
    $('[data-toggle="popover"]').popover({
        container : "body",
        html : true,
        content: function () {
            return '<div class="popover-message">' + $(this).data("message") + '</div>';
        }
    });
    // change language
    $('body').on('click', '.id-lang', function (e) {
        e.preventDefault();
        $a = $(this).find('a');
        $.ajax({
            type : 'GET',
            url : $a.attr('href'),
            success: function () {
                window.location.reload();
            }
        });
    });
    $('body').on('click', 'section#main', function () {
        if ($('body').hasClass('site-settings')) {
            $('body').removeClass('site-settings');
        }
    });

});

$(document).on('ready pjax:success', function () {
    $(".js-example-basic-single").select2();
    flatpickr(".refresh-flatepicker", {
        mode : "range",
    });
    flatpickr(".refresh-flatepicker-single", {
        mode : "single",
    });
});

/**
 * For View KYC verification documnet in popup modal
 */
$('.view-kyc-doc-popup').on('click', function () {
    $('#view-kyc-doc').modal('show');
});


/**
 * For View  in popup modal
 */
$('.view-splash-screen-string-popup').on('click', function () {
    $('#view-splash-screen-logo').modal('show');
});

/**
 * For View KYC verification documnet in popup modal
 */
$('.view-dashboard-logo-popup').on('click', function () {
    $('#view-dashboard-logo').modal('show');
});

/**
 * For View KYC verification documnet in popup modal
 */
$('.view-login-screen-popup').on('click', function () {
    $('#view-login-screen-logo').modal('show');
});

/**
 * For View KYC verification documnet in popup modal
 */
$('.view-listing-icon-popup').on('click', function () {
    $('#view-listion-logo').modal('show');
});

/**
 * For View Header Logo in popup modal for Admin
 */
$('.view-header-logo-popup').on('click', function () {
    $('#view-header-logo').modal('show');
});


//function to open pop up modal in action 'sendNotification' of 'LoyatyProductRuleControler'.
function openModel(product_id) {
    // reload page after closing modal
    $('#modalForSendBroadcastSms').on('hidden.bs.modal', function () {
    });
    // $('#modalForSendBroadcastSms').removeData();
    $('#modalForSendBroadcastSms').modal('show');
    $('<input>').attr({type: 'hidden', id: 'product-id', value: product_id}).appendTo('form');
}

$(function () {
    flatpickr(".refresh-flatepicker", {
        mode : "range",
    });
});

/**
 * For Updating User's Language
 */

$('.usr_language').click(function () {
    var selected_language = $(this).attr("data-language");

    var r = confirm("Are you sure you want change language ?");
    if (r == true) {
        $.ajax({
            url : $('#hidden_update_language_url').html(),
            type : 'POST',
            data : {
                'selected_language' : selected_language,
            },
            success: function (data) {
                location.reload();
            }
        });
    } else {
        location.reload();
    }

});
$('.notification-load').click(function () {
    $.ajax({
        url : $('#hidden_notification_load').html(),
        type : 'POST',
        success: function (data) {
            var jsonData = JSON.parse(data);
            var divdata = "";

            var dataLength = (jsonData.length > 20) ? Length = 19 : Length = jsonData.length;
            for (var i = 0; i < Length; i ++) {
                var j = i + 1;
                var iconClass;
                if (jsonData[i].notify_status == 'info') {
                    iconClass = 'icon-check-circle';
                } else if (jsonData[i].notify_status == 'warning') {
                    iconClass = 'icon-file';
                } else if (jsonData[i].notify_status == 'danger') {
                    iconClass = 'icon-alert-triangle';
                } else if (jsonData[i].notify_status == 'success') {
                    iconClass = 'icon-download-cloud';
                } else {
                    iconClass = 'icon-plus-square';
                }

                divdata += '<div id="' + jsonData[i].notify_status + '-notificationdiv-' + j + ' ' + jsonData[i].notify_code + ' "><a class="d-flex justify-content-between" href="' + jsonData[i].notify_url + '">\n' +
                    '                                            <div class="media d-flex align-items-start">\n' +
                    '                                             <div class="media-left"><i class="feather ' + iconClass + ' font-medium-5 ' + jsonData[i].notify_status + '" ></i></div>\n' +
                    '                                                <div class="media-body">\n' +
                    '                                                    <h6 class="' + jsonData[i].notify_status + ' media-heading notification-heading">' + jsonData[i].notify_title + '</h6>\n' +
                    '                                                    <small class="notification-text notification-msg">' + jsonData[i].notify_message + '</small>\n' +
                    '                                                </div>\n' +
                    '                                                <small>\n' +
                    '                                                    <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">' + jsonData[i].notify_timestamp + '</time>\n' +
                    '                                                </small>\n' +
                    '                                            </div>\n' +
                    '                                        </a></div>';
            }
            $('#notification-dynamic-list').html(divdata);
        },
        fail: function (data) {
            console.log("error")
        }
    })
});
$(function () {
    setInterval(function () {
        timeZone = $('.time_zone').html();
        var options = {
            timeZone: timeZone,
            year: 'numeric',
            month: "numeric",
            day: "numeric",
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
        var formatter = new Intl.DateTimeFormat([], options);
        var time = formatter.format(new Date());
        $('.headerTimer').html(time);
        // $('.headerTimer').html("Time Now: "+time+" "+timeZone);
    }, 1000)
});

$('#sales_rule-clear-to-date').click(function () {
    $('#loyaltysalesrule-sale_rule_to_date').val(null)
});

$('#sales_rule-clear-from-date').click(function () {
    $('#loyaltysalesrule-sale_rule_from_date').val(null)
});

$('#product_rule-clear-to-date').click(function () {
    $('#loyaltyproductrules-product_rule_to_date').val(null)
});

$('#product_rule-clear-from-date').click(function () {
    $('#loyaltyproductrules-product_rule_from_date').val(null)
});


$('#promtional_rule-clear-to-date').click(function () {
    $('#loyaltypromotionalrules-promotional_rule_to_date').val(null)
});

$('#promtional_rule-clear-from-date').click(function () {
    $('#loyaltypromotionalrules-promotional_rule_from_date').val(null)
});

$('#refer_to_friend-clear-to-date').click(function () {
    $('#referralrule-ref_rule_to_date').val(null)
});

$('#refer_to_friend-clear-from-date').click(function () {
    $('#referralrule-ref_rule_from_date').val(null)
});

/**
 * For View Announcement Image in popup modal
 */
$('.view-announcement-image-content-popup').on('click', function () {
    $('#view-announcement-image').modal('show');
});


/**
 * For View Slider Image in popup modal
 */
$('.view-slider-image-content-popup').on('click', function () {
    $('#view-slider-image').modal('show');
});

/**
 * For View Kyc Doc Image in popup modal
 */
$('.view-kyc-doc-content-popup').on('click', function () {
    alert('in');
    $('#view-kyc-doc').modal('show');
});

function getCustomerRevenueFormatter(index, row, element) {
    $.ajax({
        type : 'POST',
        url : custRevenueUrl,
        async : true,
        cache : false,
        timeOut : 30000,
        data : {
            'cust_member_id' : row._data.customermemberid
        },
        error: function () {
            return 'No Record Found';
        },
        success: function (resultData) {
            element.html(resultData);
        }
    });
}

var add_isch = function (t, hidden_cont_sel, parent_cont_sel) {

    $(parent_cont_sel).append($(hidden_cont_sel).html());
    t.hide();
    $(parent_cont_sel).find('.plus').last().show();
    key_count ++;

    if (key_count == 1 || key_count == 0) {
        $('.minus').css('display', 'none');
    } else {
        $('.minus').css('display', 'block');
    }
    if (key_count >= 5) {
        $('.plus').css('display', 'none');
    }
};

var remove_isch = function (t, row_sel, parent_cont_sel, id) {

    if (id) {
        $.ajax({
            type : 'POST',
            url : deleteSliderDetailUrl,
            async : true,
            cache : false,
            timeOut : 30000,
            data : {
                'slider_detail_id' : id
            },
            error: function () {
                return 'No Record Found';
            },
            success: function (resultData) {
                return resultData;
            }
        });
    }

    t.closest(row_sel).remove();
    $(parent_cont_sel).find('.plus').last().show();
    key_count --;

    if (key_count == 1 || key_count == 0) {
        $('.minus').css('display', 'none');
    } else {
        $('.minus').css('display', 'block');
    }
};

$(document).on('click', '.popupModal', function (e) {
    e.preventDefault();
    $.ajax({
        url : $(this).attr('href'),
        type : 'post',
        success: function (res) {
            $('.modelData').html(res);
            $('#modal-form-popup').modal('show');
        }
    });
});

$(document).on('click', '.popUpModelForInvoiceStatusUpdate', function (e) {
    e.preventDefault();
    $.ajax({
        url : $(this).attr('href'),
        type : 'post',
        success: function (res) {
            $('.invoiceStatusUpdateModelData').html(res);
            $('#update-status-invoice-modal-form-popup').modal('show');
        }
    });
});
$(document).on('click', '.popUpModelForCustomerInvoiceStatusUpdate', function (e) {
    e.preventDefault();
    $.ajax({
        url : $(this).attr('href'),
        type : 'post',
        success: function (res) {
            $('.customerInvoiceStatusUpdateModelData').html(res);
            $('#update-status-customer-invoice-modal-form-popup').modal('show');
        }
    });
});


$(document).on('click', '.popUpModelToApproveInvoice', function (e) {
    e.preventDefault();
    $.ajax({
        url : $(this).attr('href'),
        type : 'post',
        success: function (res) {
            $('.invoiceStatusUpdateModelData').html(res);
            $('#invoice_status').val('A');
            $('#invoice_status').attr('readonly', true);
            $('#update-status-invoice-modal-form-popup').modal('show');
        }
    });
});

$(document).on('click', '.popUpModelToRejectInvoice', function (e) {
    e.preventDefault();
    $.ajax({
        url : $(this).attr('href'),
        type : 'post',
        success: function (res) {
            $('.invoiceStatusUpdateModelData').html(res);
            $('#invoice_status').val('R');
            // $('#invoice_status').prop("disabled", true);
            $('#invoice_status').attr('readonly', true);
            $('#update-status-invoice-modal-form-popup').modal('show');
        }
    });
});

$('body').on('beforeSubmit', '#ticket-query-type-active-form', function () {
    $("#submitButtonQueryType").attr("disabled", true);
    return true;
});

$('body').on('beforeSubmit', '#product-label-print-form-request', function () {
    $("#create-label-request").attr("disabled", true);
    return true;
});

// Before submit change submit button to processing Stage to prevent multiple form submission with ajax enabled
$('.form-process').on('beforeSubmit', function () {
    var $form = $(this);
    var $submit = $form.find(':submit');
    $submit.prop('disabled', true);
    $submit.html('<span class="fa fa-spin fa-spinner"></span> Processing...');
});
// Before submit change submit button to processing Stage to prevent multiple form submission with ajax disabled
$('.form-process-submit').on('click', function () {
    $(this).prop('disabled', true);
    $(this).html('<span class="fa fa-spin fa-spinner"></span> Processing...');
    $(this).closest('form').submit();
});
$('#auto-helpdesk-login').on('click', function () {
    $("#form-auto-helpdesk-login").submit();
});

//Get assigned services to reseller and show in popup modal
function viewresellerassignservicepopup(reseller_member_id) {
    $.ajax({
        type : 'POST',
        url : resellerAssignedServiceUrl,
        data : {
            'reseller_member_id' : reseller_member_id
        },
        success: function (resultData) {
            $("#resellerAssignServiceListModalView").html(resultData);
            $('#view-reseller-assign-service-list').modal('show');
        }
    });
}

//Get assigned services to tenant and show in popup modal
function viewtenantassignservicepopup(user_member_id) {
    $.ajax({
        type : 'POST',
        url : tenantAssignedServiceUrl,
        data : {
            'user_member_id' : user_member_id
        },
        success: function (resultData) {
            $("#tenantAssignServiceListModalView").html(resultData);
            $('#view-tenant-assign-service-list').modal('show');
        }
    });
}

// Get Kyc Doc Image Url And Show In Popup Modal

function viewKycDocImage(kyc_id) {
    $.ajax({
        type : 'POST',
        url : kycDocImageUrl,
        data : {
            'kyc_id' : kyc_id
        },
        success: function (srs) {
            $('.kyc-doc-popup-img embed').attr('src', srs);
            $('#view-kyc-doc').modal('show');
        }
    });
}

var custMemberUrl = custMemberUrl != null ? custMemberUrl : "";
$(".select2-data-ajax-custmemberid-autocomplete").select2({
    ajax : {
        url : custMemberUrl,
        dataType : 'json',
        delay : 250,
        data: function (params) {
            return {
                c_name : params.term, // search term
                page : params.page
            };
        },
        processResults: function (data, params) {
            // parse the results into the format expected by Select2
            // since we are using custom formatting functions we do not need to
            // alter the remote JSON data, except to indicate that infinite
            // scrolling can be used
            params.page = params.page || 1;
            console.log(data);
            return {
                results : data.results,
                pagination : {
                    more : (params.page * 30) < data.total_count
                }
            };
        },
        cache : true
    },
    placeholder : 'Select All',
    escapeMarkup: function (markup) {
        return markup;
    }, // let our custom formatter work
    minimumInputLength : 1
});

$(document).on('ready pjax:success', function () {
    $(function () {
        $('.select2').select2();
    })
});

function getProductRevenueFormatter(index, row, element) {
    const formData = $('form#product-selling-search-form').serialize();

    $.ajax({
        type : 'get',
        url : productRevenueUrl + '?product_id=' + row._data.productid + '&' + formData,
        async : true,
        cache : false,
        timeOut : 30000,
        // data : {'data' : formData, 'productid' : row._data.productid},
        error : function () {
            return 'No Record Found';
        },
        success : function (resultData) {
            element.html(resultData);
        }
    });
}

function getStockAllocationProductDetails(index, row, element) {
    const formData = $('form#stock-allocation-search-form').serialize();
    $.ajax({
        type : 'get',
        url : stockAllocationUrl + '?stock_id=' + row._data.key + '&' + formData,
        async : true,
        cache : false,
        timeOut : 30000,
        error : function () {
            return 'No Record Found';
        },
        success : function (resultData) {
            element.html(resultData);
        }
    });
}

// Mobile device datepicker clear option toggle

$(document).ready(function () {
    $(".flatpickr-mobile").click(function () {
        $(".form-control-position").toggle();
    });
});

var add_invoice_amount_condition = function (t, hidden_cont_sel, parent_cont_sel) {

    $(parent_cont_sel).append($(hidden_cont_sel).html());
    t.hide();
    $(parent_cont_sel).find('.plus').last().show();
    key_count++;

    var action_class_invoice = $(parent_cont_sel).find('.invoice_action_class_change').last();
    var action_invoice_id = "loyalty_invoice_rule_action_" + key_count;
    $(action_class_invoice).attr('id', action_invoice_id);

    var max_loyalty_class_invoice = $(parent_cont_sel).find('.invoice_maximum_loyalty_points_class').last();
    var max_loyalty_invoice_id = "loyalty_invoice_rule_action_max_amount_" + key_count;
    $(max_loyalty_class_invoice).attr('id', max_loyalty_invoice_id);

    document.getElementById(action_invoice_id).removeAttribute("onchange");
    document.getElementById(action_invoice_id).setAttribute("onchange", "showMaxPoints(" + key_count + ")");

    if (key_count == 1 || key_count == 0) {
        $('.minus').css('display', 'none');
    } else {
        $('.minus').css('display', 'block');
    }
    if (key_count >= 50) {
        $('.plus').css('display', 'none');
    }
};

var remove_invoice_amount_condition = function (t, row_sel, parent_cont_sel, id) {
    t.closest(row_sel).remove();
    $(parent_cont_sel).find('.plus').last().show();
    key_count--;

    if (key_count == 1 || key_count == 0) {
        $('.minus').css('display', 'none');
    } else {
        $('.minus').css('display', 'block');
    }
};

function showMaxPoints(key) {
    var action_id = "loyalty_invoice_rule_action_" + key;
    var action = $('#' + action_id).val();

    if (action === 'percentage') {
        var maxid = 'loyalty_invoice_rule_action_max_amount_' + key;
        $('#' + maxid).show();
    } else {
        var maxid = 'loyalty_invoice_rule_action_max_amount_' + key;
        $('#' + maxid).hide();
    }
}


function showBonusMaxPoints(key) {
    var action_id = "loyalty_bonus_rule_action_" + key;
    var action = $('#' + action_id).val();
    if (action === 'percentage') {
        var maxid = 'loyalty_bonus_rule_action_max_amount_' + key;
        $('#' + maxid).show();
    } else {
        var maxid = 'loyalty_bonus_rule_action_max_amount_' + key;
        $('#' + maxid).hide();
    }
}
var add_bonus_amount_condition = function (t, hidden_cont_sel, parent_cont_sel) {

    $(parent_cont_sel).append($(hidden_cont_sel).html());
    t.hide();
    $(parent_cont_sel).find('.plus').last().show();
    key_count++;

    var action_class_invoice = $(parent_cont_sel).find('.bonus_action_class_change').last();
    var action_bonus_id = "loyalty_bonus_rule_action_" + key_count;
    $(action_class_invoice).attr('id', action_bonus_id);

    var max_loyalty_class_invoice = $(parent_cont_sel).find('.bonus_maximum_loyalty_points_class').last();
    var max_loyalty_invoice_id = "loyalty_bonus_rule_action_max_amount_" + key_count;
    $(max_loyalty_class_invoice).attr('id', max_loyalty_invoice_id);

    document.getElementById(action_bonus_id).removeAttribute("onchange");
    document.getElementById(action_bonus_id).setAttribute("onchange", "showBonusMaxPoints(" + key_count + ")");

    if (key_count == 1 || key_count == 0) {
        $('.minus').css('display', 'none');
    } else {
        $('.minus').css('display', 'block');
    }
    if (key_count >= 50) {
        $('.plus').css('display', 'none');
    }
};

var remove_bonus_amount_condition = function (t, row_sel, parent_cont_sel, id) {
    t.closest(row_sel).remove();
    $(parent_cont_sel).find('.plus').last().show();
    key_count--;

    if (key_count == 1 || key_count == 0) {
        $('.minus').css('display', 'none');
    } else {
        $('.minus').css('display', 'block');
    }
};
$('#btnBonusRuleSubmit').click(function (e){
       e.preventDefault();
       var gen_err = 0;
        $(".min_amt:visible").each(function(){
            let max_amt = $(this).parent('.bonus_min_amount_class').next('.bonus_max_amount_class').find('.max_amt');
            if($(this).val() == ''){
                $(this).val('1.00');
            }
            if(max_amt.val() == ''){
                max_amt.val('1.00');
            }
            if(parseInt($(this).val()) > parseInt(max_amt.val())){
                gen_err = 1;
                max_amt.parent('.bonus_max_amount_class').addClass('has-error');
                if (!max_amt.parent('.bonus_max_amount_class').find('.help-block-error').length) {
                    max_amt.after('<div class="help-block help-block-error">Maximum Point must be greater than Minimum Point.</div>');
                }
            }else{
                max_amt.parent('.bonus_max_amount_class').removeClass('has-error');
                max_amt.parent('.bonus_max_amount_class').find('.help-block-error').remove();
            }
        });
        $(".bonus_action_class_change:visible").each(function() {
            if($(this).val() == 'percentage'){
                let percentVal = $(this).parent('.bonus_action_class').next('.bonus_loyalty_points_class').find('.loyalty_points');
                if(percentVal.val() > 100){
                    gen_err = 1;
                    percentVal.parent('.bonus_loyalty_points_class').addClass('has-error');
                    if (!percentVal.parent('.bonus_loyalty_points_class').find('.help-block-error').length) {
                        percentVal.after('<div class="help-block help-block-error">Loyalty Points must be no greater than 100.</div>');
                    }
                }else{
                    percentVal.parent('.bonus_loyalty_points_class').removeClass('has-error');
                    percentVal.parent('.bonus_loyalty_points_class').find('.help-block-error').remove();
                }
            }
        });

        if(gen_err == 1){
            return false;
        }else{
            $(this).closest('form').submit();
        }
})
$('.min_amt').on('keyup', function(){
    if($(this).val() != ''){
        if($(this).val().charAt(0) === '0' || $(this).val().charAt(0) == 0){
            $(this).val($(this).val().slice(1));
            $(this).val('1.00');
        }
    }
});
$('.max_amt').on('keyup', function(){
    if($(this).val() != '') {
        if ($(this).val().charAt(0) === '0' || $(this).val().charAt(0) == 0) {
            $(this).val($(this).val().slice(1));
            $(this).val('1.00');
        }
    }
});