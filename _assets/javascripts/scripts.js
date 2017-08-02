function enableSolutionToggles() {
  $(".solution-toggle").click(function(e) {
    e.preventDefault();
    solution = $(this).attr("solution");
    $("#" + solution).fadeToggle("medium");
  });
}

function disableSolutionToggles() {
  $(".solution-toggle").off("click");
}

InstantClick.on("change", function() {
  $(".content a").fluidbox();
  enableSolutionToggles();

  if (typeof MathJax !== "undefined") {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }
});

InstantClick.init();
