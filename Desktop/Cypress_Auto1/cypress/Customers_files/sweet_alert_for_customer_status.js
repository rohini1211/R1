function changeStatus(status, memberid) {
    Swal.fire({
        title: '<u>Please Confirm,</u>',
        html: '<b>Are you sure you want to change customer status ?<br></b>',
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Go Ahead!',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-danger ml-1',
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            $.ajax({
                type: 'POST',
                url: $("#customerStatusChangeUrl").html() + '?status=' + status + '&cust_id=' + memberid,
                data: {},
                success: function (resultData) {
                    location.reload();
                }
            });
        }
    })
}