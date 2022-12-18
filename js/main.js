$(document).ready(function() {
  // preloader
  preloaderRemove();
  function preloaderRemove() {
    $('#preloader').delay(500).fadeOut(500, function(){
      $('#preloader').remove();
    });
  }

  // header menu toggle
  $('.js-btn-nav').on('click', function (e) {
    $('body').toggleClass('is-menu-opened');
    $('.header__nav').toggleClass('is-show');
    e.preventDefault();
  });

  // header hide menu when click
  $('.js-header-nav-link').on('click', function (e) {
    $('body').removeClass('is-menu-opened');
    $('.header__nav').removeClass('is-show');
  });

  // method payments sepda modal
  $('.js-btn-method-modal').on('click', function (e) {
    $('body').toggleClass('is-modal-opened');
    $('.method-modal').toggleClass('is-show');
    e.preventDefault();
  });

  // full page scroll
  $('#fullpage').fullpage({
    anchors: true,
    navigation: false,
    responsive: 1200,
    responsiveHeight: 680,
    anchors: ['intro', 'about', 'info', 'meta-appeal', 'help-section', 'footer'],
    afterLoad: function(anchorLink, afterIndex) {
      if (afterIndex == 1) {
        $('.js-scroll-up').addClass('is-hidden');
      };
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
      if (index == 1) {
        $('.js-scroll-up').removeClass('is-hidden');
      };
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