$('.header__navbar-btn').on('click', function () {
  $(this).toggleClass('active')
  $('.header__navbar-list').stop(true, true).slideToggle(300)
})
