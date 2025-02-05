$(document).ready(function () {
    $("#increaseFont").click(function () {
        let currentSize = parseInt($(".text").css("font-size"));
        $(".text").css("font-size", (currentSize + 2) + "px");
    });

    $("#decreaseFont").click(function () {
        let currentSize = parseInt($(".text").css("font-size"));
        $(".text").css("font-size", (currentSize - 2) + "px");
    });
});
