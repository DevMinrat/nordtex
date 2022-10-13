if (document.querySelector(".main-news__slider")) {
  var weworksSlider = new Splide(".main-news__slider", {
    width: "100%",
    perPage: 3,
    perMove: 1,
    gap: "4rem",
    padding: { left: "11rem", right: "10rem" },
    pagination: false,
    classes: {
      arrows: 'splide__arrows your-class-arrows',
      arrow : 'splide__arrow your-class-arrow',
      prev  : 'splide__arrow--prev your-class-prev',
      next  : 'splide__arrow--next your-class-next',
    },

    // drag: "free",
    // snap: true,
    // flickPower: 200,

    mediaQuery: "min",
    breakpoints: {},
  }).mount();
}
