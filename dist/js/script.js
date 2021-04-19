// burger
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  // menu = document.querySelector('.navbar__menu', '.menu__close'),
  menuClose = document.querySelector('.menu__close'),
  bodyLock = document.querySelector('body');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  bodyLock.classList.add('lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});

// img hover
let priceBlock = document.querySelectorAll('.price__block'),
	// menuLink = document.querySelectorAll('.menu__link > a'),
	imgOrigin = document.querySelector('.img_origin'),
	imgHover = document.querySelector('.img_hover'),
	priceImg = document.querySelectorAll('.price__img');
	

console.log(priceBlock);



for (let i = 0; i < priceBlock.length; i++) {
	priceBlock[i].addEventListener('mouseenter', function () {
			imgOrigin.style.display = 'none';
			imgHover.style.display = 'block';
  });
}

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
for (let i = 0; i < priceBlock.length; i++) {
	priceBlock[i].addEventListener('mouseenter', function () {
		imgOrigin.style.display = 'none';
		imgHover.style.display = 'block';
  });
}
for (let i = 0; i < priceBlock.length; i++) {
  priceBlock[i].addEventListener('mouseleave', function () {
		imgOrigin.style.display = 'block';
		imgHover.style.display = 'none';
  });
}

// priceBlock.addEventListener('mouseenter', () => {
// 	imgOrigin.style.display = 'none';
// 	imgHover.style.display = 'block';
// });
// priceBlock.addEventListener('mouseleave', () => {
// 	imgOrigin.style.display = 'block';
// 	imgHover.style.display = 'none';
// });

