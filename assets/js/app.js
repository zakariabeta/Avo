(function ($) {
  
  var breakpointMobile = 575;
  app = {
    init: function () {
      app.Headroom();
    },
    Headroom: function () {
      if ($('header').length > 0) {
        var options = {
          // vertical offset in px before element is first unpinned
          offset: 0,
          // scroll tolerance in px before state changes
          tolerance: 5,
          // css classes to apply
          classes: {
            // when element is initialised
            initial: "headroom",
            // when scrolling up
            pinned: "is-sticky",
            // when scrolling down
            unpinned: "not-sticky",
            // when above offset
            top: "headroom--top",
            // when below offset
            notTop: "headroom--not-top",
            // when at bottom of scoll area
            bottom: "headroom--bottom",
            // when not at bottom of scroll area
            notBottom: "headroom--not-bottom"
          }
        }
        // Element target
        var myElement = document.querySelector("header");
        var headroom = new Headroom(myElement);

        // initialise settings
        headroom.offset = 110;//px
        
        if ($(window).width() <= breakpointMobile) {
        // initialise settings
        headroom.offset = 98;//px
        }
  
        headroom.init(options);
      }
    },
  };

  app.init();
})(jQuery);
$(document).ready(function() {
  AOS.init();
})