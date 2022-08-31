$(".partners").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
const partnerDocButton = document.querySelectorAll(
  ".partners .slick-dots button"
);
const partnerNext = document.querySelector(".partners .slick-next");
const partnerPrev = document.querySelector(".partners .slick-prev");

partnerDocButton.forEach((btn) => (btn.textContent = ""));
partnerNext.textContent = ">";
partnerPrev.textContent = `<`;
