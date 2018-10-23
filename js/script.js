$(document).ready(function () {
    // $('.header-center .nav-tab').click(function () {
    //     $('.nav-tab').removeClass("active");
    //     $(this).addClass("active");
    // });

    $(function () {
        $('.header').on('mousemove', function (e) {
            $('').css({
                marginLeft: -e.pageX / 10 + 100,
                marginTop: -e.pageY / 10 + 100
            })
            $('').css({
                marginLeft: e.pageX / 50 + 100,
                marginTop: e.pageY / 50 + 100
            })
        })
    })
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#XYI").addClass("header-content-scrolled");
        $('#fun').addClass('fun');
        $('#weather').addClass('weather');
        $('#facebookimg').attr("src", "img/facebook_black.png")
        $('#instagramimg').attr("src", "img/instagram_black.png")
        $('#twitterimg').attr("src", "img/twitter_black.png")
    } else {
        $("#XYI").removeClass("header-content-scrolled");
        $('#fun').removeClass('fun');
        $('#weather').removeClass('weather');
        $('#facebookimg').attr("src", "img/facebook.png")
        $('#instagramimg').attr("src", "img/instagram.png")
        $('#twitterimg').attr("src", "img/twitter.png")
    }
});