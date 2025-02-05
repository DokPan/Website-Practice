$(document).ready(function () {
    $(".invert").click(function () {
        let textColor = $(this).css("color");
        let bgColor = $(this).css("background-color");

        $(this).css({
            "color": bgColor,
            "background-color": textColor,
        });
    });
});
