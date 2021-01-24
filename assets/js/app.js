// (function ($) {
//   app = {
//     init: function () {
//       this._slider();
//     },
//     _slider: function () {
//       if ($(".slider-home__item").length > 1) {
//         $(".slider-home").slick({
//           infinite: false,
//           dots: true,
//           arrows: true,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           // autoplay: true,
//           autoplaySpeed: 2000,
//         });
//       }
//     },
//   };

//   app.init();
// })(jQuery);
$(document).ready(function() {
  $( ".landing-page .contant" ).addClass('animation');
  setTimeout(function() { 
    $( ".landing-page .contant p" ).addClass('show');
  }, 3500);
})