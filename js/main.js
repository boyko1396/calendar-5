$(document).ready(function() {
  // header menu toggle
  $('.js-btn-nav').on('click', function (e) {
    $('body').toggleClass('is-menu-opened');
    $('.header__nav').toggleClass('is-show');
    e.preventDefault();
  });
  // header menu toggle
  $('.js-header-nav-link').on('click', function (e) {
    $('body').removeClass('is-menu-opened');
    $('.header__nav').removeClass('is-show');
  });

  // full page scroll
  $('#fullpage').fullpage({
    anchors: true,
    navigation: false,
    responsive: 1200,
    responsiveHeight: 680,
    anchors: ['intro', 'about', 'info', 'meta-appeal', 'help-section', 'footer'],
    afterLoad: function(anchorLink, afterIndex) {
      if (afterIndex == 3) {
        $('.header').addClass('header--theme-white');
      };
      if (afterIndex == 5) {
        $('.header').addClass('header--theme-white');
      };
      if (afterIndex == 6) {
        $('.header').addClass('header--theme-white');
      };
    },
    onLeave: function(index, nextIndex, direction) {
      if (index == 3) {
        $('.header').removeClass('header--theme-white');
      };
      if (index == 5) {
        $('.header').removeClass('header--theme-white');
      };
      if (index == 6) {
        $('.header').removeClass('header--theme-white');
      };
    }
  });
});