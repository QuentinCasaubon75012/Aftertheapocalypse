$(document).ready(function() {
  $("#enterthebunker").click(function() {
    $('html, body').animate({
        scrollTop: $("#landingcover").offset().top
    }, 1500);
  });

  $("#launchtheanalysis").click(function() {
    $('html, body').animate({
        scrollTop: $("#analysisstarted").offset().top
    }, 400);
  });

  $("#launchtheconfig").click(function() {
    $('html, body').animate({
        scrollTop: $("#configpoint").offset().top
    }, 300);
  });
});
