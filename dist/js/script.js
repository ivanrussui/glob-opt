// burger
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  // menu = document.querySelector('.navbar__menu', '.menu__close'),
  menuClose = document.querySelector('.menu__close'),
  bodyLock = document.querySelector('body');

hamburger.addEventListener('click', ()	=> {
  menu.classList.add('active');
  bodyLock.classList.add('lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});

// Tiny Slider
const slider = tns({
  container: '.reviews__slider',
  items: 1,
  slideBy: 'page',
  controls: false,
  autoplay: false,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
  speed: 600,
  responsive: {
    320: {
      nav: true,
    },
    768: {
      nav: false,
    },
  },
});

// переключение кнопок в слайдере
document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});


// img hover
// let priceBlock = document.querySelector('.price__block'),
//   imgOrigin = document.querySelector('.price__img_origin'),
//   imgHover = document.querySelector('.price__img_hover'),
//   priceImg = document.querySelectorAll('.price__img');

// console.log(priceBlock);

// for (let i = 0; i < priceBlock.length; i++) {
// 	priceBlock[i].addEventListener('mouseenter', function () {
// 		imgOrigin.style.display = 'none';
// 		imgHover.style.display = 'block';
//   });
// }

// for (let i = 0; i < priceBlock.length; i++) {
//   priceBlock[i].addEventListener('mouseleave', function () {
// 		imgOrigin.style.display = 'block';
// 		imgHover.style.display = 'none';
//   });
// }
// for (let i = 0; i < priceBlock.length; i++) {
//   priceBlock[i].addEventListener('mouseenter', function () {
//     imgOrigin.style.display = 'none';
//     imgHover.style.display = 'block';
//   });
// }
// for (let i = 0; i < priceBlock.length; i++) {
//   priceBlock[i].addEventListener('mouseleave', function () {
//     imgOrigin.style.display = 'block';
//     imgHover.style.display = 'none';
//   });
// }

// priceBlock.addEventListener('mouseenter', () => {
// 	imgOrigin.style.display = 'none';
// 	imgHover.style.display = 'block';
// });
// priceBlock.addEventListener('mouseleave', () => {
// 	imgOrigin.style.display = 'block';
// 	imgHover.style.display = 'none';
// });
