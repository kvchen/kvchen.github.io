InstantClick.on('change', function() {
    ga('send', 'pageview', location.pathname + location.search);

    $('.hint-toggle').off('click');
    $('.solution-toggle').off('click');
    $('.js-jump-top').off('click');


    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0});
    });

    $('.hint-toggle').on('click', function(e) {
        e.preventDefault();
        $(".hint").slideToggle('medium');
    });

    $('.solution-toggle').on('click', function(e) {
        e.preventDefault();
        $(".solution").slideToggle('medium');
    });
});

$(document).ready(function() {
    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0});
    });

    $('.hint-toggle').on('click', function(e) {
        e.preventDefault();
        $(".hint").slideToggle('medium');
    });

    $('.solution-toggle').on('click', function(e) {
        e.preventDefault();
        $(".solution").slideToggle('medium');
    });
});

var enableClickHandlers = function() {
    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0});
    });

    $('.hint-toggle').on('click', function(e) {
        e.preventDefault();
        $(".hint").slideToggle('medium');
    });

    $('.solution-toggle').on('click', function(e) {
        e.preventDefault();
        $(".solution").slideToggle('medium');
    });
}