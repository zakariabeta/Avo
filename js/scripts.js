$(function() {
  $("#slider4").bsTouchSlider();
  $(".carousel .carousel-inner").swipe({
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      this.parent().carousel("next");
    },
    swipeRight: function() {
      this.parent().carousel("prev");
    },
    threshold: 0
  });
  // This is for counter
  $(".counter").counterUp({
    delay: 10
  });
  /*******************************/
  // this is for the testimonial 9
  /*******************************/
  $(".testi9").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1650: {
        items: 1
      }
    }
  });
  /*******************************/
  // actu feed rss
  /*******************************/

  var $actuListing = $("#actuListing");
  function formatDate(date) {
    var monthNames = [
      "janvier",
      " février",
      " mars",
      " avril",
      " mai",
      " juin",
      " juillet",
      " août",
      " septembre",
      " octobre",
      " novembre",
      "décembre"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }
  /*$.ajax({
    type: "GET",
    url: "data/data.xml",
    cache: false,
    dataType: "xml",
    success: function(xml) {
      var $items = $(xml).find("item");
      var i = 0;
      $items.each(function(index) {
        if (i > 2) {
          return false;
        }

        var category = $(this)
          .find("category")
          .first()
          .text();
        if (category != "DLA") {
          var title = $(this)
            .find("title")
            .text();
          var link = $(this)
            .find("link")
            .text();
          var pubDate = $(this)
            .find("pubDate")
            .text();
          pubDate = formatDate(new Date(pubDate));
          var image = $(this)
            .find("enclosure")
            .attr("url");
          image = image.replace("150x150", "320x202");

          var $html = '<div class="col-md-4">';
          $html +=
            '<div class="card card-shadow" data-aos="flip-left" data-aos-duration="1200">';
          $html +=
            '<a href="' +
            link +
            '" target="_blank" ><img class="card-img-top" src="' +
            image +
            '" alt="wrappixel kit"></a>';
          $html += '<div class="p-30">';
          $html += '<div class="d-flex no-block font-14">';
          $html += '<a href="' + link + '">' + category + "</a>";
          $html += '<span class="ml-auto">' + pubDate + "</span>";
          $html += "</div>";
          $html +=
            '<h5 class="font-medium m-t-20"><a href="' +
            link +
            '"  target="_blank" class="link">' +
            title +
            "</a></h5>";
          $html += "</div>";
          $html += "</div>";
          $html += "</div>";

          $actuListing.append($html);
          i++;
        }
      });
      setTimeout(function() {
        $("#actuListing .card").matchHeight();
      }, 500);
    },
    error: function(resultat, statut, erreur) {
      console.log(resultat);
      console.log("-----------------");
      console.log(statut);
      console.log("-----------------");
      console.log(erreur);
    }
  });*/
  // ==============================================================
  // Anchor scroll
  // ==============================================================

  $(".homenav .general-listing a, .homenav .navbar-nav a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash,
        hashTop = $(hash).offset().top;
        hashTop = hashTop - 120;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: hashTop
        },
        800

      );
    } // End if
  });
  $photo = $('#actuListing .card.card-shadow');
  if($photo.length > 0){
    $photo.matchHeight();
  }
  if($('#actuListing .target').length > 0){
    $('#actuListing .target').attr('target','_blank');
  }
  function onSubmit(token) {
    document.getElementById("validez").submit();
  }
});
