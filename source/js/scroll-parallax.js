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
