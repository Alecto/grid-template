$('.header-navbar__btn').on('click', function () {
  $(this).toggleClass('active')
  $('.header-navbar__list').stop(true, true).slideToggle(500)
})
