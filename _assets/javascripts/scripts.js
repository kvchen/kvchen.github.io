$(function() {
  function enableClickHandlers() {
    $('.js-jump-top').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      });
    });

    $('.solution-toggle').click(function(e) {
      e.preventDefault();
      solution = $(this).attr('solution');
      $('#' + solution).fadeToggle('medium');
    });
  }

  function disableClickHandlers() {
    $('.solution-toggle').off('click');
    $('.js-jump-top').off('click');
  }

  enableClickHandlers();
});
