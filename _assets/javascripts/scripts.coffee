InstantClick.on 'change', () ->
  ga 'send', 'pageview', location.pathname + location.search

  disableClickHandlers()
  enableClickHandlers()

$ ->
  enableClickHandlers()


enableClickHandlers = () ->
  $('.js-jump-top').on 'click', (e) ->
    e.preventDefault()
    $('html, body').animate {'scrollTop': 0}

  $('.hint-toggle').on 'click', (e) ->
    e.preventDefault()
    $(".hint").slideToggle 'medium'

  $('.solution-toggle').on 'click', (e) ->
    e.preventDefault()
    $(".solution").slideToggle 'medium'


disableClickHandlers = () ->
  $('.hint-toggle').off 'click'
  $('.solution-toggle').off 'click'
  $('.js-jump-top').off 'click'


