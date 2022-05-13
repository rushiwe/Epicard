$('.owl-carousel-1').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    // animateOut: 'fadeOut',
    smartSpeed: 800,
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

$('.owl-carousel-2').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

AOS.init();

AOS.init({
    duration: 900
});