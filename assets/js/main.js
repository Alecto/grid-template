$(document).ready(() => {
  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('header-navbar__btn--active');
    $('.header-navbar__list')
      .stop(true, true)
      .fadeToggle(500);
  });
});
