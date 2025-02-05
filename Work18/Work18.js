$(document).ready(function () {
    $("#hideParagraphs").click(function () {
        $("p").hide();
    });

    $(".hideSelf").click(function () {
        $(this).hide();
    });

    $("#hideFirst").click(function () {
        $("#firstPara").hide();
    });

    $("#hideSecond").click(function () {
        $("#secondPara").hide();
    });

    $("#hideTest").click(function () {
        $(".test").hide();
    });
	
	$(document).ready(function () {
    $("#showParagraphs").click(function () {
        $("p").show();
    });

    $("#showAll").click(function () {
        $("body *").show();
    });
});
});
