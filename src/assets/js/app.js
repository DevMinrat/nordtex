//= ../../../node_modules/@splidejs/splide/dist/js/splide.js
//= components/scroll-lock.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/sliders.js

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
    const menu = document.querySelector(".menu");
    const dropLinks = document.querySelectorAll(
      ".nav-list__item-link--droplink"
    );
    const dropList = document.querySelectorAll(".nav-list__droplink-list");

    burger.addEventListener("click", () => {
      burger.classList.toggle("menu-on");
      menu.classList.toggle("active");

      if (burger.classList.contains("menu-on")) {
        scrollLock.disablePageScroll();
      } else {
        scrollLock.enablePageScroll();
      }
    });

    // if (window.innerWidth <= 991) {
    //   for (let i = 0; i < dropLinks.length; i++) {
    //     dropLinks[i].addEventListener("click", function (e) {
    //       toggleDroplinksStyle(i);
    //       showDroplistContent(e, i);
    //     });
    //   }
    // }

    // function toggleDroplinksStyle(i) {
    //   dropLinks.forEach((el, inx, arr) => {
    //     if (el === arr[i]) {
    //       el.classList.add("active");
    //     } else {
    //       el.classList.remove("active");
    //     }
    //   });
    // }

    // function hideAllDropList() {
    //   dropList.forEach((item) => {
    //     item.style.maxHeight = null;
    //   });
    // }

    // function showDroplistContent(event, i) {
    //   if (!dropList[i].style.maxHeight) {
    //     event.preventDefault();
    //     hideAllDropList();
    //     dropList[i].style.maxHeight = dropList[i].scrollHeight + "px";
    //   } else {
    //     event.stopPropagation();
    //     hideAllDropList();
    //   }
    // }
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

  /// required form fields
  const forms = document.querySelectorAll("form");

  if (forms.length > 0) {
    forms.forEach((form) => {
      const submitBtn = form.querySelector("button[type='submit']");

      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        setBlankFields(form);

        if (checkReqFields(form)) {
          form.submit();
          form.querySelector(".error-req-fields").classList.add("hide");
        }
      });
    });

    function checkReqFields(form) {
      const reqInputBoxes = form.querySelectorAll(".required-input__wrapper");
      let flag = false;

      reqInputBoxes.forEach((el) => {
        const input = el.querySelector("input");

        if (!input.validity.valid) {
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
        if (!input.validity.valid) {
          blankFieldsList.push(input.dataset.name);

          errReqField.classList.remove("hide");

          reqFieldsArea.innerText = blankFieldsList.join(", ");
        }
      });
    }
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
      elPaneAddlShow ? elPaneAddlShow.classList.remove("tabs-pane_addl_show") : null;
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
      });
    });
  }

  const modals = document.querySelectorAll(".modal");

  if (modals.length > 0) {
    modals.forEach((el) => {
      el.querySelector("[data-close]").addEventListener("click", () => {
        el.classList.add("hide");
      });
    });
  }
});
