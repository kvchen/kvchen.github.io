function enableSolutionToggles(){$(".solution-toggle").click(function(o){o.preventDefault(),solution=$(this).attr("solution"),$("#"+solution).fadeToggle("medium")})}function disableSolutionToggles(){$(".solution-toggle").off("click")}InstantClick.on("change",function(){$(".content a").fluidbox(),enableSolutionToggles(),"undefined"!=typeof MathJax&&MathJax.Hub.Queue(["Typeset",MathJax.Hub])}),InstantClick.init();