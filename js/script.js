/* ----------------------
    STICKY NAVBAR 
---------------------- */
$(document).ready(function () {
  // grab the initial top offset of the navigation
  var stickyNavTop = $("#stickyNavbar").offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) {
      $("#stickyNavbar").addClass("stickyNavbar");
    } else {
      $("#stickyNavbar").removeClass("stickyNavbar");
    }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function () {
    stickyNav();
  });
});

/* ----------------------
BANNER SLIDER - OWL CAROUSEL 
---------------------- */
$(".banner-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  autoplaySpeed: 1500,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>",
  ],
});

/* ----------------------
ANIMATED TEXT - TYPED JS  
---------------------- */
var typing = new Typed(".typing", {
  strings: [" Clean. Responsive."],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

var typing = new Typed(".projectTyping", {
  strings: [" our latest works"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

var typing = new Typed(".callTyping", {
  strings: [" work with us?"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

/* ----------------------
OWL CAROUSEL - LATEST WORK PROJECT  
---------------------- */

$(".work-slider").owlCarousel({
  items: 4,
  responsive: {
    320: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  autoplaySpeed: 1500,
});

/* ----------------------
ANIMATED TEXT - TYPED JS  / CALL TO ACTION SECTION
---------------------- */
// var typing = new Typed(".typing", {
//   strings: [" Clean. Responsive."],
//   typeSpeed: 70,
//   backSpeed: 70,
//   loop: true,
// });

// var typing = new Typed(".projectTyping", {
//   strings: [" our latest works"],
//   typeSpeed: 70,
//   backSpeed: 70,
//   loop: true,
// });
