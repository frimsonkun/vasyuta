$(document).ready(function() {
    $('.slider-slick').slick({
        slidesToShow: 3,
        variableWidth: true,
        infinite: true,
        waitForAnimate: false,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
            },
            breakpoint: 1024,
            settings: {
                slidesToShow: 8,
                arrows: true,
            },
        }]
    });
});