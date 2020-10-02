'use strict';
(function () {
  var windowWidth = document.documentElement.clientWidth;
  var LAPTOP_WIDTH = 1024;
  var containers = document.querySelectorAll('.js-parallax-item');
  var rightContainers = document.querySelectorAll('.js-parallax-item-right');

  if (windowWidth >= LAPTOP_WIDTH) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onEnter',
        // duration: '400%'
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
          duration: '300%'
        })
          .setTween(item, {y: '-40%', ease: 'linear'})
          // .addIndicators()
          .addTo(controller);
      });
    }
  }

})();
