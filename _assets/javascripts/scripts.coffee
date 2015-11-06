InstantClick.on 'change', () ->
  ga 'send', 'pageview', location.pathname + location.search

  disableClickHandlers()
  enableClickHandlers()

$ ->
  enableClickHandlers()


enableClickHandlers = ->
  $('.js-jump-top').on 'click', (e) ->
    e.preventDefault()
    $('html, body').animate
      'scrollTop': 0

  $('.solution-toggle').click (e) ->
    e.preventDefault()
    solution = $(this).attr 'solution'
    $("##{solution}").fadeToggle 'medium'


disableClickHandlers = ->
  $('.solution-toggle').off 'click'
  $('.js-jump-top').off 'click'
