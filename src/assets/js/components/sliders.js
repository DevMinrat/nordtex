if (document.querySelector(".weworks")) {
  var weworksSlider = new Splide(".weworks", {
    arrows: false,
    width: "100%",
    perPage: 2,
    gap: "1rem",

    drag: "free",
    snap: true,
    flickPower: 200,

    mediaQuery: "min",
    breakpoints: {
      921: {
        destroy: true,
      },
      501: {
        perPage: 2,
      },
      10: {
        perPage: 1,
      },
    },
  }).mount();
}
