$(document).ready(function () {
    $("tr:even").css("background-color", "lightgray");

    $("#greenRows").click(function () {
        $("tr:odd").css("background-color", "green");
    });

    $("tr").click(function () {
        if ($(this).css("background-color") === "rgb(255, 255, 0)") {
            $(this).css("background-color", "white");
        } else {
            $(this).css("background-color", "yellow");
        }
    });
});
