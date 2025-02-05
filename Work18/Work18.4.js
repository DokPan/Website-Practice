$(document).ready(function () {
    $("#toggleFast").click(function () {
        $("#togglePara").toggle();
    });

    $("#toggleSlow").click(function () {
        $("#togglePara").toggle(1000);
    });
});
