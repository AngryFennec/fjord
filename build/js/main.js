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
    $(".main-header__button a").click(function(){
        $(".main-header__overlay").fadeToggle(200);
       $(this).toggleClass('main-header__btn-open').toggleClass('main-header__btn-close');
    });
});
$('.main-header__overlay').on('click', function(){
    $(".main-header__overlay").fadeToggle(200);
    $(".main-header__button a").toggleClass('main-header__btn-open').toggleClass('main-header__btn-close');
    open = false;
});

/*
$(".main-header__menu-link").hover(function(){
    $(this).addClass('animate__animated animate__pulse');
});
$(".main-header__menu-link").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    $(this).removeClass('animate__animated animate__pulse');
});
*/

$('.js-scroll-trigger').click(function() {
  var scrollName = $(this).attr('data-scroll'),
      scrollElem = $(scrollName),
      scrollTop = scrollElem.offset().top;

  $('html, body').animate({
    scrollTop: scrollTop
  }, 1000);
});

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

const config = {
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
}

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


var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: 'json/data.json', // Required
  renderer: 'html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
  rendererSettings: {
  preserveAspectRatio:'none'
}
})
