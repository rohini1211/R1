function referredCustomer(referrer_cust_id, referral_cust_id) {
    $('#hidden_referrer_cust_id').val(referrer_cust_id);
    $('#hidden_referral_cust_id').val(referral_cust_id);

    $.ajax({
        url: $('#hidden_ref_cust_url').html(),
        type: 'ajax',
        data: {
            'referrerCustomerId': $('#hidden_referrer_cust_id').val(),
            'referralCustomerId': $('#hidden_referral_cust_id').val()
        },
        success: function (refcustdata) {
            $('#listRecords').html(refcustdata);
            $('#referredCustomerListModel').modal('show');
        }
    });
}