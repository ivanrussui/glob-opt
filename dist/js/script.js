// burger
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  menuClose = document.querySelector('.menu__close'),
  bodyLock = document.querySelector('body'),
	modal = document.querySelector('#consultation');

modal.style.border = '5px solid #ec644b';

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  bodyLock.classList.add('lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});

// внутри бургера при переходе по ссылкам на стр закрытие бургера
let navbarLink = document.querySelectorAll('.navbar__link');

for (let i = 0; i < navbarLink.length; i++) {
  navbarLink[i].addEventListener('click', function () {
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  });
}

// Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 130,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
});

$(document).ready(function () {

  // modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks').fadeOut(450);
  });

  // Validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, введите имя',
          minlength: jQuery.validator.format('Введите более {0} букв!'),
        },
        phone: 'Пожалуйста, введите телефон',
        email: {
          required: 'Пожалуйста, введите почту',
          email: 'Неправильно введен адрес почты',
        },
      },
    });
  }

  validateForms('.consultation__form');
  validateForms('.questions__form');
  validateForms('.modal__form');

  // Masked Input
  $('input[name=phone').mask('+7 (999) 999-9999');

  // Ajax
  $('form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation').fadeOut('slow');
      $('.overlay, #thanks').fadeIn('750');

      $('form').trigger('reset');
    });
    return false;
  });

	// pageup
	$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('.pageup').fadeIn(500);
    } else {
      $('.pageup').fadeOut('slow');
    }
  });

  // плавность перехода по всем ссылкам на сайте
  $("a[href^='#']").click(function () {
    const _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });

});
