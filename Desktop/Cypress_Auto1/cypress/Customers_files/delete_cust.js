function deleteComment(cust_id) {
    $('#hidden_cust_id').val(cust_id);
    $('#modalForCustDelete').modal('show');
}

function addComment() {
    if ($('#add_comment_input').val() == "") {
        $('#comment_div').show();
        $('#comment_div').fadeOut(2000);
        return false;
    }
    updateComment();
}

function updateComment() {
    var custId = $('#hidden_cust_id').val();
    $.ajax({
        url: $('#hidden_cust_url').html(),
        type: 'POST',
        data: {
            'id': custId,
            'comment': $('#add_comment_input').val(),
        },
        success: function (data) {
        }
    });
}
