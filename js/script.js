const Nav = document.querySelector("nav");
const close_ = document.querySelector(".close_");
const btn_bars = document.querySelector(".bars_");
const moboverlay = document.querySelector(".moboverlay");
const body_ = document.querySelector("body");

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
$(".news .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 30,
  autoplaySpeed: 5000,
  loop: true,
  speed: 6000,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive: {
    0: {
      items: 1,
      margin: 15,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
if ($(window).width() <= 776) {
  // sub menu
  $(".hover_menu > a").click(function (e) {
    e.preventDefault();

    $(this).parent().find(".ul_menu").slideToggle("500");
  });
}
// ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~
// document.onreadystatechange = function (e) {
//   if (document.readyState == "interactive") {
//     var all = document.getElementsByTagName("*");
//     for (var i = 0, max = all.length; i < max; i++) {
//       set_ele(all[i]);
//     }
//   }
// };
// function check_element(ele) {
//   var all = document.getElementsByTagName("*");
//   var totalele = all.length;
//   var per_inc = 100 / all.length;

//   if ($(ele).on()) {
//     var prog_width =
//       per_inc + Number(document.getElementById("progress_width").value);
//     document.getElementById("progress_width").value = prog_width;
//     $("#bar1").animate({ width: prog_width + "%" }, 3, function () {
//       if (document.getElementById("bar1").style.width == "100%") {
//         $(".progress").fadeOut("slow");
//         // $(".progress_preload").hide("slow");
//         $(".progress .bar").fadeOut("slow");
//       }
//     });
//   } else {
//     set_ele(ele);
//   }
// }
// function set_ele(set_element) {
//   check_element(set_element);
// }

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
// ~~~~~~~~~~wow.js
new WOW().init();
document.documentElement.style.setProperty("--animate-duration", ".8s");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~lasy-load~~~~~~~~~~~~~~~~~~~~~~
// const images = document.querySelector("img");
// const lasyLoad = (img) => {
//   const intobserve = new IntersectionObserver((enteries, observer) => {
//     enteries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const source = image.getAttribute("data-lasy");
//         image.setAttribute("src", source);
//         image.classList.add("fade-");
//         observer.disconnect();
//       }
//     });
//   });

//   intobserve.observe(img);
// };
// images.forEach(lasyLoad);
