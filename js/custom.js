// Sticky header
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 0) {
//     $("header").addClass('sticky');
//   } else {
//     $("header").removeClass('sticky');
//   }
// });


// AOS for Animation



/******banner home slider****/

var swiper = new Swiper(".banner-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
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

// var swiper = new Swiper(".news-slider", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//   },
// });

// Read More Functionality

const READMORE_DEFAULT_LINES = 4;

readMore($(".spoiler"));
readMore($(".other"), 15);

let treatmentLines = 8;

if (window.innerWidth <= 768) {
  treatmentLines = 6;
} else if (window.innerWidth <= 991) {
  treatmentLines = 5;
}

readMore($(".treatmentList"), treatmentLines);

function readMore(elements, lineNum) {
  lineNum = !isNaN(lineNum) ? lineNum : READMORE_DEFAULT_LINES;

  elements.each(function () {
    new ReadMore($(this), lineNum);
  });
}

function ReadMore(wrapper, lineNum) {
  const READ_MORE_LABEL = "Show more";
  const HIDE_LABEL = "Less more";

  const textBlock = wrapper.children(".hidden-text");
  const lineHeight = parseInt(textBlock.css("line-height"), 10);
  const textMinHeight = lineHeight * lineNum;

  textBlock.css({
    height: "auto",
    display: "block",
  });

  const textMaxHeight = textBlock.outerHeight();

  textBlock.css({
    height: textMinHeight + "px",
    overflow: "hidden",
    transition: "height .5s",
  });

  if (!wrapper.find(".read-more").length) {
    wrapper.append(
      '<button class="read-more">' + READ_MORE_LABEL + "</button>"
    );
  }

  const btn = wrapper.find(".read-more");

  btn.on("click", () => {
    if (parseInt(textBlock.css("height")) === textMinHeight) {
      textBlock.css("height", textMaxHeight + "px");
      btn.text(HIDE_LABEL).addClass("active");
    } else {
      textBlock.css("height", textMinHeight + "px");
      btn.text(READ_MORE_LABEL).removeClass("active");
    }
  });
}



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

