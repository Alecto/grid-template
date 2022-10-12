document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.header-navbar__btn');
  const list = document.querySelector('.header-navbar__list');

  btn.addEventListener('click', () => {
    btn.classList.toggle('header-navbar__btn--active');

    if (btn.classList.contains('header-navbar__btn--active')) {
      list.classList.add('animate__flipInX');
      list.classList.remove('animate__flipOutX');
    } else {
      list.classList.remove('animate__flipInX');
      list.classList.add('animate__flipOutX');
    }
  });

});


