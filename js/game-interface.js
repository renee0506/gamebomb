var gameSearch = require('./../js/game.js').gameSearchModule;
var gameInfo = require('./../js/game.js').gameInfoModule;

function results(data){
  data.results.forEach(function(result) {
    $("#search-results").append("<button class='game-info' type='button'>" + result.name + "</button></br>");
    $(".game-info").click(function(){
      $("#game-name").text("this is the game name");
      $("#result").show();
      console.log($(this).innerHTML);
    });
  });
}

$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var newName = $("#title").val();
    gameSearch(newName, results);
  });

});
