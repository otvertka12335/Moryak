$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#header-content").addClass("header-content-scrolled");
        $('#fun').addClass('fun');
        $('#weather').addClass('weather');
        $('#facebookimg').attr("src", "img/facebook_black.png")
        $('#instagramimg').attr("src", "img/instagram_black.png")
        $('#twitterimg').attr("src", "img/twitter_black.png")
    } else {
        $("#header-content").removeClass("header-content-scrolled");
        $('#fun').removeClass('fun');
        $('#weather').removeClass('weather');
        $('#facebookimg').attr("src", "img/facebook.png")
        $('#instagramimg').attr("src", "img/instagram.png")
        $('#twitterimg').attr("src", "img/twitter.png")
    }
});