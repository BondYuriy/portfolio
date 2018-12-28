$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
});

//=============================================================
function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
    $("footer").css({
      bottom: "0px"
    });
  } else {
    $("footer").css({
      bottom: "-" + heightFooter + "px"
    });
  }
}

$(window).load(function() {
  var windowHeight = $(window).height(),
    footerHeight = $("footer").height(),
    heightDocument =
      windowHeight + $(".main").height() + $("footer").height() - 5;

  $("#scroll-animate, #scroll-animate-main").css({
    height: heightDocument + "px"
  });

  $(".wrapper-header").css({
    height: windowHeight + "px",
    "line-height": windowHeight + "px"
  });

  $(".wrapper-parallax").css({
    "margin-top": windowHeight + "px"
  });

  scrollFooter(window.scrollY, footerHeight);

  window.onscroll = function() {
    var scroll = window.scrollY;

    $("#scroll-animate-main").css({
      top: "-" + scroll + "px"
    });

    $(".wrapper-header").css({
      "background-position-y": 5 - (scroll * 100) / heightDocument + "%"
    });

    scrollFooter(scroll, footerHeight);
  };
});

//====================================
var sections = $(".section"),
  nav = $(".navbar-nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function() {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

nav.find("a").on("click", function() {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height
    },
    500
  );

  return false;
});
