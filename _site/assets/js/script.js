// when document is fully loaded
jQuery(document).ready(function($){
  $('.slick__silder').slick({
    dots: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    touchThreshold:300,
    responsive: [
      {
        // tablet
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        // mobile portrait
        breakpoint: 479,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-prev').click(function(){
      $(this).closest('.section').find(".list").slick('slickPrev');
  });

  $('.slider-next').click(function(){
      $(this).closest('.section').find(".list").slick('slickNext');
  });

});
