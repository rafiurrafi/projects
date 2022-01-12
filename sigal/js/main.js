var $grid = $(".top-courses__content").isotope({
  // options
  filter: ".v",
});
// filter items on button click
$(".top-courses__filter-btns").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
