$(document).ready(function () {
    $(".theme").click(function () {
        $("body").removeClass("day night sepia").addClass($(this).attr("id").replace("Theme", ""));
    });
});
