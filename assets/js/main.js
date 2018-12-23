
$(document).ready(function () {

  $('.header-navbar__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').stop(true, true).fadeToggle(500);
  });

});