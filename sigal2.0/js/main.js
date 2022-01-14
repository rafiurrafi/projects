// isotop
var $grid = $(".top-courses__content").isotope({
  // options
  filter: ".v",
});
// filter items on button click
$(".top-courses__filter-btns").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
$(document).ready(function () {
  //owl carousel
  $("#upcoming-course").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoPlay: 1000,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  // join-card-container
  $(".join-card-container ").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
