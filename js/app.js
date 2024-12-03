// MMENU
// menu
$(document).ready(function () {

  $("#first_lable").show();

  $("#menu").mmenu({
    extensions: [
      "effect-menu-zoom",
      "effect-panels-zoom",
      "pagedim-black",
      "theme-dark",
    ],
    offCanvas: {
      position: "left",
    },
    counters: true,
    iconPanels: true,
    navbars: [
      {
        position: "top",
      },
    ],
  });
});
// section1
var swiper0 = new Swiper(".mySwiper0", {
  // autoplay: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// section1 Page Code Teeth Whitening
var swiper3 = new Swiper(".mySwiper3", {
  // autoplay: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$('#menu_icon').click(function () {
  $('#menu').css("display", "block");
});

// $('#mm-blocker').click(function() {
//   console.log(0)
//   $('#menu').hide();

// });
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,

    }
  }
});
// var swiper = new Swiper(".mySwiper", {
//   autoplay: true,
//   loop: true,
//   slidesPerView: 2,
//   // spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,

//     },
//   }
// });

// Slider 2
var swiper1 = new Swiper(".mySwiper1", {
  // autoplay: true,
  // loop: true,
  // slidesPerView: 2,
  // spaceBetween:20,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Accordion
var acc = document.getElementsByClassName("label");




var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    $(content).slideToggle();
  });
}
// Counter
$(".counter").counterUp({
  delay: 10,
  time: 2000,
});
// $(".counter").addClass("animated fadeInDownBig");
// $("h4").addClass("animated fadeIn");

// About Slider Code
var swiper4 = new Swiper(".mySwiper4", {
  pagination: {
    el: ".swiper-pagination",
  },
});
// About Slider Code

// Popup 
// When the user clicks on div, open the popup
$("#openpopup").click(function(){
  $(".bg_overlay").addClass("bg_overlay_");
  $(".popup_box").addClass("popup_box_");
  $("body").addClass("flow_hidden");
  // [your code here]
});
$(".close_btn").click(function(){
  $(".bg_overlay").removeClass("bg_overlay_");
  $(".popup_box").removeClass("popup_box_");
  $("body").removeClass("flow_hidden");
  // [your code here]
});
