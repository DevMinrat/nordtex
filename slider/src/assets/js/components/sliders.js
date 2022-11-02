if (document.querySelector(".main-news__slider")) {
  var weworksSlider = new Splide(".main-news__slider", {
    width: "100%",
    // perPage: 3,
    autoWidth: true,
    perMove: 1,
    gap: "4rem",
    padding: { left: "11rem", right: "10rem" },
    pagination: false,
    classes: {
      arrows: "splide__arrows your-class-arrows",
      arrow: "splide__arrow your-class-arrow",
      prev: "splide__arrow--prev your-class-prev",
      next: "splide__arrow--next your-class-next",
    },

    // drag: "free",
    // snap: true,
    // flickPower: 200,

    mediaQuery: "min",
    breakpoints: {},
  }).mount();
}

if (document.querySelector(".about-gds__slider")) {
  var aboutGdsSlider = new Splide(".about-gds__slider", {
    width: "100%",
    // perPage: 3,
    autoWidth: true,
    perMove: 1,
    gap: "4rem",
    pagination: false,
    arrows: false,

    // drag: "free",
    // snap: true,
    // flickPower: 200,

    mediaQuery: "min",
    breakpoints: {
      921: {
        destroy: true,
      },
    },
  }).mount();
}

if (document.querySelector(".mfr-bnf__slider")) {
  var mfrBnfSlider = new Splide(".mfr-bnf__slider", {
    width: "100%",
    autoWidth: true,
    perMove: 1,
    gap: "3.1rem",
    pagination: false,
    arrows: false,

    // drag: "free",
    // snap: true,
    // flickPower: 200,

    mediaQuery: "min",
    breakpoints: {
      921: {
        drag: false,
      },
    },
  }).mount();
}

if (document.querySelector(".factory-info__main-slider")) {
  var factoryMainSlider = new Splide(".factory-info__main-slider", {
    type: "loop",
    width: "100%",
    perPage: 1,
    // gap: "10rem",
    // rewind: true,
    pagination: false,
    arrows: false,
    focus: "center",
  });

  var factoryThumbSlider = new Splide(".factory-info__thumb-slider", {
    width: "100%",
    autoWidth: true,
    gap: "2rem",
    rewind: true,
    pagination: false,
    isNavigation: true,

    classes: {
      arrows: "splide__arrows your-class-arrows",
      arrow: "splide__arrow your-class-arrow",
      prev: "splide__arrow--prev your-class-prev",
      next: "splide__arrow--next your-class-next",
    },
  });

  factoryMainSlider.sync(factoryThumbSlider);
  factoryMainSlider.mount();
  factoryThumbSlider.mount();
}
