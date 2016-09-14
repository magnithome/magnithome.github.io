$(function () {
    $(".b-slider").owlCarousel({
        pagination: false,
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });
    $('.b-shop__item').hover(
        function () {
            $(this).addClass('j-active');
        },
        function () {
            $(this).removeClass('j-active');
    });
    $('.b-images__item').hover(
        function () {
            $(this).addClass('blur');
            $(this).children('.b-images__title').addClass('j-view');
        },
        function () {
            $(this).removeClass('blur');
            $(this).children('.b-images__title').removeClass('j-view');
    });

    $(".b-video__text").mCustomScrollbar({
        axis: "y"
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.btn-to-top').fadeIn();
        } else {
            $('.btn-to-top').fadeOut();
        }
    });
    $('.btn-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    $('.b-open-menu').on('click', function () {
        $('.b-menu').toggleClass('j-open');
    });
})
