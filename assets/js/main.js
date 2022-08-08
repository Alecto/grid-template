$(document).ready(() => {

  $('.header-navbar__btn').on('click', function () {
    $(this).toggleClass('header-navbar__btn--active');
    $('.header-navbar__list')
      .stop(true, true)
      .slideToggle(500);
  });

});
