$(document).ready(function () {
    if($('#privacy-policy .privacy-policy-content').length > 0) {
        $.ajax({
            url: "/pages/get_privacy_or_conditions.php?type=PRIVACY",
            method: 'GET'
        }).done(function (data) {
            //console.log(data);
            if (data.success) {
                $('#privacy-policy .privacy-policy-content').html(data.content);
            }
        });
    } else if($('#terms-and-conditions .terms-and-conditions-content').length > 0) {
        $.ajax({
            url: "/pages/get_privacy_or_conditions.php?type=CONDITIONS",
            method: 'GET'
        }).done(function (data) {
            //console.log(data);
            if (data.success) {
                $('#terms-and-conditions .terms-and-conditions-content').html(data.content);
            }
        });
    }
});
