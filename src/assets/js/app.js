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

    //// animate arrow link

    const arrowLink = document.querySelector("#arrow-sm");

    console.log(arrowLink.viewBox.animVal.width);
    arrowLink.viewBox.animVal.width = 36;
    console.log(arrowLink.viewBox.animVal.width);

    console.log(arrowLink.querySelector("path").viewBox);

    arrowLink.querySelector(
      "path"
    ).outerHTML = `<path d="M33.6963 11.9997H0.303432M33.6963 11.9997L28.3391 6.64258M33.6963 11.9997L28.3391 17.3569"
    stroke-width="1.4" />`;
    console.log(arrowLink.querySelector("path"));
  }
});
