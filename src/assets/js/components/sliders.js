if (document.querySelector(".main-news__slider")) {
  var weworksSlider = new Splide(".main-news__slider", {
    width: "100%",
    // perPage: 3,
    autoWidth: true,
    perMove: 1,
    gap: "4rem",
    // padding: { left: "11rem", right: "10rem" },
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

    breakpoints: {
      1024: {
        gap: "3rem",
      },
      920: {
        gap: "2rem",
        arrows: false,
      },
    },
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
        gap: "4rem",
      },
      501: {
        gap: "3rem",
        destroy: false,
      },
      300: {
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
        gap: "3.1rem",
      },
      300: {
        gap: "2rem",
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
    classes: {
      arrows: "splide__arrows",
      arrow: "splide__arrow",
      prev: "splide__arrow--prev",
      next: "splide__arrow--next",
    },

    breakpoints: {
      500: {
        arrows: true,
      },
    },
  });

  var factoryThumbSlider = new Splide(".factory-info__thumb-slider", {
    width: "100%",
    autoWidth: true,
    gap: "2rem",
    rewind: true,
    pagination: false,
    isNavigation: true,
    padding: { left: "31.2rem", right: "3rem" },

    classes: {
      arrows: "splide__arrows",
      arrow: "splide__arrow",
      prev: "splide__arrow--prev",
      next: "splide__arrow--next",
    },

    breakpoints: {
      1024: {
        destroy: false,
        padding: { left: "22rem", right: "3rem" },
      },
      920: {
        destroy: false,
        padding: { left: "13.4rem", right: "3rem" },
      },
      500: {
        destroy: true,
      },
    },
  });

  factoryMainSlider.sync(factoryThumbSlider);
  factoryMainSlider.mount();
  factoryThumbSlider.mount();
}
