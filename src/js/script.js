// burger
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	// menu = document.querySelector('.navbar__menu', '.menu__close'),
	menuClose = document.querySelector('.menu__close'),
	bodyLock = document.querySelector('body');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	// menuClose.classList.add('active');
});

menuClose.addEventListener('click', () => {
	menu.classList.remove('active');
});