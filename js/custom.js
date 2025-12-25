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


/********************** */


var impactSwiper = new Swiper(".locat-impact", {
  slidesPerView: 2.4,   // important for partial preview
  spaceBetween: 20,
  loop: true, 
  grid: {
    rows: 2,
    fill: "row",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  watchSlidesProgress: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: { rows: 2 },
    },
    768: {
      slidesPerView: 1.6,
      grid: { rows: 2 },
    },
    1024: {
      slidesPerView: 2.1,
      grid: { rows: 2 },
    },
    1400: {
      slidesPerView: 2.4,
      grid: { rows: 2 },
    },
  },
});




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



/*************menw active **********/
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // sabhi li se active hata do
  document.querySelectorAll(".navbar-nav li.active")
    .forEach(li => li.classList.remove("active"));

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      // sirf current page ka hi active rahe
      const parentLi = link.closest("li");
      if (parentLi) {
        parentLi.classList.add("active");
      }
    }
  });
});



