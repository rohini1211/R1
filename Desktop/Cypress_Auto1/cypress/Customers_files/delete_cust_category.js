function deleteCatComment(custCategoryId) {
    $('#hidden_cust_category_id').val(custCategoryId);
    $('#modalForCustCategoryDelete').modal('show');
}

function addCatComment() {
    if ($('#add_cat_comment_input').val() == "") {
        $('#cat_comment_div').show();
        $('#cat_comment_div').fadeOut(2000);
        return false;
    }
    updateCatComment();
}

function updateCatComment() {
    var custCategoryId = $('#hidden_cust_category_id').val();
    $.ajax({
        url: $('#hidden_cust_category_url').html(),
        type: 'POST',
        data: {
            'id': custCategoryId,
            'comment': $('#add_cat_comment_input').val(),
        },
        success: function (data) {
        }
    });
}
