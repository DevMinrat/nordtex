//= ../../../node_modules/@splidejs/splide/dist/js/splide.js
//= ../../../node_modules/swiper/swiper-bundle.js

//= components/scroll-lock.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/sliders.js
  //= components/history.js

  const header = document.querySelector(".header");
  let scrollPrev = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      let scrolled = document.documentElement.scrollTop;

      if (scrolled > 50 && scrolled > scrollPrev) {
        header.classList.add("out");
      } else {
        header.classList.remove("out");
      }

      if (scrolled <= 50) {
        header.classList.add("top");
      } else {
        header.classList.remove("top");
      }

      scrollPrev = scrolled;
    });

    if (document.documentElement.scrollTop <= 50) {
      header.classList.add("top");
    }

    const burger = document.querySelector(".burger-menu");
    const mobMenuClose = document.querySelector(".mob-menu_close");
    const menu = document.querySelector(".menu");

    burger.addEventListener("click", () => {
      menu.classList.add("active");

      scrollLock.disablePageScroll();
    });

    mobMenuClose.addEventListener("click", () => {
      menu.classList.remove("active");

      scrollLock.enablePageScroll();
    });

    const headerLogo = document.querySelector(".header__logo");
    const headerSearchBtn = document.querySelector(".header-search__icon");
    const headerOther = document.querySelector(".header-orher");
    const headerSearch = document.querySelector(".header-search");

    if (headerSearchBtn) {
      headerSearchBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (headerOther.classList.contains("active")) {
          headerSearch.submit();
        }

        headerOther.classList.add("active");
        menu.classList.add("hide");
        headerLogo.classList.add("mob-search");
      });
    }

    // document.documentElement.addEventListener("click", (e) => {
    //   let t = e.target;

    //   if (!headerSearch.contains(t)) {
    //     headerOther.classList.remove("active");
    //     menu.classList.remove("hide");
    //     headerLogo.classList.remove("mob-search");
    //   }
    // });
  }

  const brandsSection = document.querySelector(".brands");
  const showBrandsBtn = document.querySelector(".show-brands");

  if (brandsSection && showBrandsBtn) {
    showBrandsBtn.addEventListener("click", () => {
      if (brandsSection.classList.contains("hide")) {
        brandsSection.classList.remove("hide");
        showBrandsBtn.querySelector("span").innerText = "Скрыть бренды";
      } else {
        brandsSection.classList.add("hide");
        showBrandsBtn.querySelector("span").innerText = "Показать бренды";
      }
    });
  }

  // tabs

  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs =
        typeof target === "string" ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll(".tabs-btn");
      this._elPanes = this._elTabs.querySelectorAll(".tabs-pane");
      this._elPanesAddl = this._elTabs.querySelectorAll(".tabs-pane_addl");
      this._eventShow = new Event("tab.itc.change");
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute("role", "tablist");
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute("role", "tab");
        this._elPanes[index].setAttribute("role", "tabpanel");
        this._elPanesAddl[index].setAttribute("role", "tabpanel");
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elPaneAddlTarget = this._elPanesAddl[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector(".tabs-btn_active");
      const elPaneShow = this._elTabs.querySelector(".tabs-pane_show");
      const elPaneAddlShow = this._elTabs.querySelector(".tabs-pane_addl_show");
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove("tabs-btn_active") : null;
      elPaneShow ? elPaneShow.classList.remove("tabs-pane_show") : null;
      elPaneAddlShow
        ? elPaneAddlShow.classList.remove("tabs-pane_addl_show")
        : null;
      elLinkTarget.classList.add("tabs-btn_active");
      elPaneTarget.classList.add("tabs-pane_show");
      elPaneAddlTarget.classList.add("tabs-pane_addl_show");
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    }
    _events() {
      this._elTabs.addEventListener("click", (e) => {
        const target = e.target.closest(".tabs-btn");
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  if (document.querySelector(".contacts-addrs")) {
    new ItcTabs(".contacts-addrs");
  }

  // modal functioal

  const modalTriggers = document.querySelectorAll("[data-modal]");

  if (modalTriggers.length > 0) {
    modalTriggers.forEach((el) => {
      el.addEventListener("click", () => {
        let modalName = el.dataset.modal;
        let modal = document.querySelector(`[data-modalName='${modalName}']`);

        modal.classList.remove("hide");
        scrollLock.disablePageScroll();
      });
    });
  }

  const modals = document.querySelectorAll(".modal");

  if (modals.length > 0) {
    modals.forEach((el) => {
      el.querySelector("[data-close]").addEventListener("click", () => {
        el.classList.add("hide");
        scrollLock.enablePageScroll();
      });
    });
  }

  const pageLinks = document.querySelectorAll('a[href^="#"]');

  if (pageLinks.length > 0) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  const videoStartBtn = document.querySelectorAll(".video__start-btn");

  if (videoStartBtn.length > 0) {
    videoStartBtn.forEach((el) => {
      let video = el.nextElementSibling;

      el.addEventListener("click", () => {
        video.play();
        el.style.display = "none";
        video.parentElement.classList.add("play");
      });
    });
  }

  const introVideo = document.querySelector(".intro__video");

  if (introVideo) {
    introVideo.addEventListener("playing", () => {
      introVideo.previousElementSibling.style.display = "none";
    });
  }

  // align buttons

  const btnArrows = document.querySelectorAll(".arrow-icon");

  if (btnArrows.length) {
    btnArrows.forEach((el) => {
      let parent = el.parentElement;

      if (
        parent.classList.contains("filled-btn") ||
        parent.classList.contains("hollow-btn")
      ) {
        parent.classList.add("padding-fix");
      }
    });
  }

  /// required form fields
  const formResume = document.querySelector("#sendform");

  if (formResume) {
    // resumeBtn.addEventListener("click", (e) => {
    //   setBlankFields(formResume);

    //   // if (checkReqFields(formResume)) {
    //   // }
    // });

    // formResume.addEventListener("submit", function (e) {
    //   var form = document.forms.sendform,
    //                formData = new FormData(form),
    //                xhr = new XMLHttpRequest();

    //   xhr.open("POST", "/mail.php");

    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4) {
    //       if (xhr.status == 200) {
    //         $("#sendform").html('<p class="thank">Данные отправлены!<p>');
    //       }
    //     }
    //   };
    //   xhr.send(formData);
    // });
    // formResume.addEventListener("submit", handleFormSubmit);

    // function handleFormSubmit(e) {
    //   e.preventDefault();

    //   let formData = new FormData(this);

    //   formData = Object.fromEntries(formData);

    //   ajaxSend(formData);
    //   formResume.querySelector(".error-req-fields").classList.add("hide");

    //   this.reset();
    // }

    function checkReqFields(form) {
      const reqInputBoxes = form.querySelectorAll(".required-input__wrapper");
      let flag = false;

      reqInputBoxes.forEach((el) => {
        const input = el.querySelector("input");

        if (input.value.length == 0) {
          el.classList.add("error");
          flag = false;
        } else {
          el.classList.remove("error");
          flag = true;
        }
      });

      return flag;
    }

    function setBlankFields(form) {
      const errReqField = form.querySelector(".error-req-fields");
      const reqFieldsArea = errReqField.querySelector("#req-fields");
      const reqInputs = form.querySelectorAll("input[required]");

      let blankFieldsList = [];

      reqInputs.forEach((input) => {
        if (input.value.length == 0) {
          blankFieldsList.push(input.dataset.name);

          errReqField.classList.remove("hide");

          reqFieldsArea.innerText = blankFieldsList.join(", ");
        }
      });

      if (blankFieldsList.length == 0) {
        errReqField.classList.add("hide");
      }
    }

    // const ajaxSend = (formData) => {
    //   fetch("mail.php", {
    //     // файл-обработчик
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //     .then((response) => {
    //       $("#sendform").html('<p class="thank">Данные отправлены!<p>');
    //     })
    //     .catch((error) => console.error(error));
    // };
  }
});
