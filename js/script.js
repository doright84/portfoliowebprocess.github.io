$(document).ready(function () {
    AOS.init();
    // ---gotop----
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.gotop').slideDown();
        } else {
            $('.gotop').slideUp();
        }
    });
    let sw_cont = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        // spaceBetween: 5,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 800,
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.sw-next',
            prevEl: '.sw-prev',
        },

    });


});