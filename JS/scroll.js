$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('about').offset().top }, 'slow');
      return false;
    });
  });