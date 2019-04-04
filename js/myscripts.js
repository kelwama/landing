$(".nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#logo a").removeClass("active");
});
