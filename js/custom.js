$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: true,
        infinity: true,
        centerMode: true,
        speed: 300,
        rows: 2,
        slidesPerRow: 1,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1
                }
            },
        ]
    });
})






