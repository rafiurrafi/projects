$(".sidebar-open__btn").on("click", function () {
  $(".sidebar").addClass("active");
});
$(".sidebar > button").on("click", function () {
  $(".sidebar").css("width", "5rem");
  setTimeout(() => {
    $(".sidebar").removeClass("active");
  }, 400);
});
