$(document).ready(function(){
    $('.review__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/review/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/review/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 980,
                    settings: {
                        dots: true,
                        arrows: false
                }
            }
        ]
      });
});
