// Sticky header

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $("header").addClass('sticky');
  } else {
    $("header").removeClass('sticky');
  }
});


// AOS for Animation



/******banner home slider****/

var swiper = new Swiper(".banner-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true, 
  pagination: {
    el: ".swiper-pagination",
     clickable: true,
  },
});

/******research-slider****/

var swiper = new Swiper(".locat-impact", {
  slidesPerView: 3,
  spaceBetween: 20,

  grid: {
    rows: 2,
    fill: "row", 
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

    on: {
      slideChange: updateTopRowActive,
      init: updateTopRowActive,
    },

  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: { rows: 2 },
    },
    768: {
      slidesPerView: 2,
      grid: { rows: 2 },
    },
    1024: {
      slidesPerView: 3,
      grid: { rows: 2 },
    },
  },
});

function updateTopRowActive() {
  const slides = impactSwiper.slides;
  const visibleCols = impactSwiper.params.slidesPerView;
  const startIndex = impactSwiper.activeIndex;

  // remove class from all
  slides.forEach(slide => slide.classList.remove("active-top"));

  // add class ONLY to top row visible slides
  for (let i = 0; i < visibleCols; i++) {
    const topRowIndex = startIndex + i;
    if (slides[topRowIndex]) {
      slides[topRowIndex].classList.add("active-top");
    }
  }
}


// var swiper = new Swiper(".research-slider", {
//   slidesPerView: 3.5,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1.2,
//       spaceBetween: 10,
//     },
//     640: {
//       slidesPerView: 2.1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2.4,
//       spaceBetween: 20,
//     },
//     1200: {
//       slidesPerView: 3.5,
//       spaceBetween: 30,
//     },
//   },
// });

/******news slider****/


AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});



/*************menw active **********/


 document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");

      if ((currentPage === "" || currentPage === "index.html") && linkPage === "index.html") {
        link.classList.add("active");
      }

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  });

