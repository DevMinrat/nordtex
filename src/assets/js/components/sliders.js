if (document.querySelector(".main-news__slider")) {
  var weworksSlider = new Splide(".main-news__slider", {
    width: "100%",
    perPage: 3,
    perMove: 1,
    gap: "4rem",
    padding: { left: "11rem" },

    drag: "free",
    snap: true,
    flickPower: 200,

    mediaQuery: "min",
    breakpoints: {},
  }).mount();
}
