const Nav = document.querySelector("nav");
const close_ = document.querySelector(".close_");
const btn_bars = document.querySelector(".bars_");
const moboverlay = document.querySelector(".moboverlay");
const body_ = document.querySelector("body");
body_.classList.add("over_");

$(window).on("load", function () {
  $(".preload").fadeOut();
  body_.classList.remove("over_");
});

// menu
btn_bars.addEventListener("click", function () {
  Nav.classList.add("open_menu");
  body_.classList.add("over_");
});
close_.addEventListener("click", function () {
  Nav.classList.remove("open_menu");
  body_.classList.remove("over_");
});
// ~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~start clients~~~~~~~~~~~~~~~~~~~~ */
$(document).ready(function () {
  // ~~~~~~~~~~~~back_top
  var btn = $(".back_top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });
});
//~~~~~~~~~ fixed header
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 150) {
    $("header").addClass("fixed_");
  } else {
    $("header").removeClass("fixed_");
  }
});
var fixedBar = document.querySelector("header"),
  prevScrollpos = $(window).scrollTop();

(window.onscroll = function () {
  var o = $(window).scrollTop();
  prevScrollpos < o && prevScrollpos > 0
    ? fixedBar.classList.add("fixsedt")
    : fixedBar.classList.remove("fixsedt"),
    (prevScrollpos = o);
}),
  document.documentElement.style.setProperty("--animate-duration", ".5s");
// ~~~~~~~~~~~~~~~
$(".clients .owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  margin: 30,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive: {
    0: {
      items: 3,
      margin: 15,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 6,
    },
  },
});
/*~~~~~~~~~~~~~~~~~~end clients~~~~~~~~~~~~~~~~~~~~ */
//start blog

if ($(window).width() <= 776) {
  // sub menu
  $(".hover_menu > a").click(function (e) {
    e.preventDefault();

    $(this).parent().find(".ul_menu").slideToggle("500");
  });
}

// ~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~services
if ($(window).width() <= 992) {
  $(".projects_img").unwrap(".grid_div ");
  $(".projects_img").addClass("item");
  $(".projects").addClass("owl-carousel");
  $(".projects_section .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    margin: 15,
    // autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
    },
  });
}
// ~~~~~~~~~~~~~~~
