$(function () {
    // no dragstart img
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });
});

//burger mobile menu
var clickDelay = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {

    if (clickDelayTimer === null) {

        var $burger = $(this);
        $burger.toggleClass('active');
        $burger.parent().toggleClass('is-open');

        if (!$burger.hasClass('active')) {
            $burger.addClass('closing');
        }

        clickDelayTimer = setTimeout(function () {
            $burger.removeClass('closing');
            clearTimeout(clickDelayTimer);
            clickDelayTimer = null;
        }, clickDelay);
    }

    $(".col-flex").slideToggle();
    $(".burger-menu-piece").toggleClass('white');

});

//main-slider
$('.main-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    prevArrow: '<div class="prev arr-left"></div>',
    nextArrow: '<div class="next arr-right"></div>',
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: false,
                autoplay:true,
                infinite: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                arrows: false,
                autoplay:true,
                infinite: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
                autoplay:true,
                infinite: true
            }
        }

    ]
});

//open posts mobil

$('.posts').click(openPostMob);

function openPostMob() {
    $(this).find('.fa-down').toggleClass('fa-act');
    $(this).find('.wrap-post-ul').slideToggle();
    $(this).find('.wrap-country').slideToggle();
}

// button click to up
$(".btn-up_link").on('click', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),

        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

//animation on scroll
new WOW().init();

//active filter

$('.items-blog-item').click(setActivFilter);

function setActivFilter() {
    $(this).toggleClass('act-filter');
}

