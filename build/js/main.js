// var rellax = new Rellax('.rellax');
/*
(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();
*/
$(document).ready(function(){

  var ios = /iPhone|iPad/i.test(navigator.userAgent);
  var noScrollClass = ios ? 'no-scroll-ios' : 'no-scroll';
  var currentPosition;

  var disableBodyScroll = function (ios) {
    if (ios) {
      currentPosition = window.scrollY;
    }
    document.body.classList.add(noScrollClass);
  }

  var enableBodyScroll = function (ios) {
    document.body.classList.remove(noScrollClass);
    if (ios) {
      window.scrollTo(0, currentPosition);
    }
  }

  var openMenu = function () {
    $(".main-header__overlay").fadeIn(200);
    $('.main-header').addClass('main-header--open');
    disableBodyScroll(ios, currentPosition);
  };

  var closeMenu = function () {
    $(".main-header__overlay").fadeOut(200);
    $('.main-header').removeClass('main-header--open');
    enableBodyScroll(currentPosition);
  };

  var onOpenMenuBtn = function () {
    if ($('.main-header').hasClass('main-header--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

    $(".main-header__btn-open").click(function(){
      onOpenMenuBtn();
    });
});


/*
$(".main-header__menu-link").hover(function(){
    $(this).addClass('animate__animated animate__pulse');
});
$(".main-header__menu-link").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    $(this).removeClass('animate__animated animate__pulse');
});
*/

// $('.js-scroll-trigger').click(function() {
//   var scrollName = $(this).attr('data-scroll'),
//       scrollElem = $(scrollName),
//       scrollTop = scrollElem.offset().top;

//   $('html, body').animate({
//     scrollTop: scrollTop
//   }, 1000);
// });

// document.addEventListener('wheel',function (event){
//   console.log(event.deltaY);
//   //only vertical scroll
//   if (event.deltaY > 0)
//   {
//     event.preventDefault();
//     smoothScrollDown(document.documentElement,200,500)
//   }
//   if (event.deltaY < 0)
//   {
//     event.preventDefault();
//   //  smoothScrollUp(document.documentElement,100,2000)
//   }
// })
// function smoothScrollDown (domElement,pixel,delay)
// {
//   const intervalToRepeat = 25;
//   const step = (intervalToRepeat * pixel) / delay;
//     console.log(step);
//   if ( step < pixel)
//   {
//     console.log(domElement.scrollTop);
//     domElement.scrollTop += step;
//     setTimeout(function (){
//       smoothScrollDown(domElement,pixel - step,delay)
//     },intervalToRepeat);
//   }
//
//
// }
//
// function smoothScrollUp (domElement,pixel,delay)
// {
//
//   const intervalToRepeat = 25;
//   const step = (intervalToRepeat * pixel) / delay;
//   console.log(step);
//   if ( step < pixel)
//   {
//     console.log(domElement.scrollTop);
//     domElement.scrollTop += step;
//     setTimeout(function (){
//       smoothScrollUp(domElement,pixel - step,delay)
//     },intervalToRepeat);
//   }
//
//
// }

/* const config = {
  view: document.querySelector('.app'),
  preload: true,
  native: false,
  change(state) {
    document.documentElement.style.backgroundColor = `hsl(${(state.current / state.bounding) * 360}, 100%, 95%)`;
  },

};
if (document.querySelector('.app')) {
const r = window.rolly(config);
r.init();
} */

/*
document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".main-header__para");

  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _depth = `${50 - (_mouseX - _w) * 0.01}%`;
      let x = `${_depth}`;
      elem.style.backgroundPosition = x;
  }
*/


//   const mainCursor = document.querySelector('.main__cursor');
//
// document.addEventListener('mousemove', e => {
//     mainCursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
// });

// document.addEventListener('click', e => {
//     mainCursor.classList.add("expand");
//     setTimeout(() => {
//         mainCursor.classList.remove("expand");
//     }, 200);


/* var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'json/data.json', // Required
  renderer: 'html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
  rendererSettings: {
  preserveAspectRatio:'none'
}
}) */

'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var controller = null;
  var containers = document.querySelectorAll('.js-parallax-item');
  var rightContainers = document.querySelectorAll('.js-parallax-item-right');

  var scrollParallax = function () {
    controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
      }
    });

    if (containers.length) {
      containers.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '400%'
        })
          .setTween(item, {y: '50%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

    if (rightContainers.length) {
      rightContainers.forEach(function (item) {
        new ScrollMagic.Scene({
          triggerElement: item,
          duration: '200%'
        })
          .setTween(item, {y: '-40%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }

  };

  if (windowWidth >= LAPTOP_WIDTH) {
    scrollParallax();
  }

  window.addEventListener('resize', function () {
    windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= LAPTOP_WIDTH) {
      if (!controller) {
        scrollParallax();
      }
    } else {
      if (controller) {
        controller = controller.destroy(true);
      }

    }
  });

})();
