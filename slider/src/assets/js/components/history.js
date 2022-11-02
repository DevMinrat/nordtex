let windowHeight = window.innerHeight;
document.body.style.cssText = `--windH: ${windowHeight}px`;

let swiperHistory = document.querySelector('.swiper-history');
if(swiperHistory) {
    let years = document.querySelectorAll(".about__slide_year");


    let newSwiper = new Swiper(swiperHistory, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                let copyEl = years[index].innerHTML;
                let attr = years[index].getAttribute("data-attr");
                let classN;
                if(attr) {
                    classN = "date " + attr;
                } else {
                    classN = "date";
                }
                if(copyEl.includes("2005")) {
                    classN += " middle";
                }
                return '<span class="' + className + " " + classN + '">' + (copyEl) + '</span>';
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".swiper-slide",
        }
    });   

    let swiperTh = document.querySelector("#swiper__thumb-el");
    swiperTh.style.cssText = `--progress: 0%`;
    let commonLen = newSwiper.slides.length;
    newSwiper.on("slideChange", function() {
        let curSlide = newSwiper.realIndex;
        let allTabs = document.querySelectorAll(".swiper-pagination-bullet.date");
        for(let i = 0; i < allTabs.length; i++) {
            if(allTabs[i].classList.contains("year-big")) {
                if(i <= curSlide) {
                    allTabs[i].classList.add("colored");
                } else {
                    allTabs[i].classList.remove("colored");
                }    
            }
        }
        let progress = curSlide / (commonLen - 1);
        swiperTh.style.cssText = `--progress: ${progress}%`;
    })
}



