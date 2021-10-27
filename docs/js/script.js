$(document).ready(function(){
    $('ul.solutions__tabs').on('click', 'li:not(.solutions__tab_active)', function() {
        $(this)
          .addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
          .closest('.container').find('.solutions__content').removeClass('solutions__content_active').eq($(this).index()).addClass('solutions__content_active');
      });
   
    $('.solutions__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/solutions/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/solutions/arrow_right.png"></button>',
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