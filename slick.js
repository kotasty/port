$(document).ready(function(){

$('#ts-color').slick({
  slidesToShow: 5,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0, 
  speed: 5000,
  swipe: false,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  infinite: true,
  
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});

$('#ts-monotone').slick({
  slidesToShow: 5,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0, 
  speed: 5000,
  swipe: false,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  infinite: true,


  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});

});
