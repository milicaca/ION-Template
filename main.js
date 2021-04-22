$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
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

var onTop = $(".onTop");

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        console.log('scrolam dole: ' + $(window).scrollTop());
        onTop.fadeIn(600).css("cursor", "pointer");
        onTop.click(function() {
            $(window).scrollTop(0);
        });
    } else {
        onTop.fadeOut(600);
    }
});