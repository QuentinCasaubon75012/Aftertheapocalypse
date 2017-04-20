$(document).ready(function() {
  $(".skill-selector").click(function(){
    $(this).toggleClass("selected");
  });
  function searchengine(){
    $(".sk-folding-cube").addClass("hidden");
    $("#theperfectcandidate").html("The perfect collaborator, based on your selection:")
    $(".card").removeClass("hidden");
    $(".searchingword").addClass("hidden");
    $(".btn-search").removeClass("hidden");
    $(".btn-search").html("Try another configuration");
    $('html, body').animate({
        scrollTop: $("#scrollingpoint").offset().top
    }, 500);
    $(".fourth-segment").animate({height:'450'});
  }
  $(".btn-search").click(function(){
    $(".fourth-segment").animate({height:'650'});
    $(".card").addClass("hidden");
    $(".searchingword").removeClass("hidden");
    $("#theperfectcandidate").html("Waiting for the matching of your criterias and our database, it should be ready now...");
    $(".btn-search").addClass("hidden");
    $(".sk-folding-cube").removeClass("hidden");
    setTimeout(searchengine, 4000);
  });

});
