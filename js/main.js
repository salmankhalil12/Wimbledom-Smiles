// Loader Start
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.08);
    }, 70);
  }
}

function displayContent() {
  loader.style.display = "none";
  // document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(2);
});

// Sticky Navbar

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// FancyBox
Fancybox.bind('[data-fancybox="video"]', {
  Thumbs: true,
  Toolbar: false,

  Image: {
    zoom: false,
    click: false,
    wheel: "slide",
  },
});

// WOW Init
new WOW().init();

// Swiper Testimonial
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// btn prevent page reload
$("#btn_norefresh").click(function () {
  event.preventDefault();
});

// MMENU
// menu
jQuery(document).ready(function ($) {
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
// menu close

// Tab panels

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
