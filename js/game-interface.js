var gameSearch = require('./../js/game.js').gameSearchModule;
var gameInfo = require('./../js/game.js').gameInfoModule;

function allPlatforms(platforms){
  $("#game-platform").empty();
  platforms.forEach(function(platform) {
    console.log(platform.name);
    $("#game-platform").append(platform.name + " | ");
  });
}

function gameDescription(info, image, releaseDate){
  $("#game-info").text(info);
  $("#game-date").text(releaseDate.substring(0,10));
  $("#game-image").html("<img src='" + image + "'>");
}

function createButton(name, totalResult){
  var number = Math.ceil(totalResult/10);
  $("#page-buttons").empty();
  for(var j=1; j<= number; j++){
    $("#page-buttons").append("<button id=\"" + name + "\" class='btn page-info' type='button' value=\""+ j + "\">" + j + "</button>");
  }
  $(".page-info").click(function(){
    gameSearch($(this).attr('id'), results, $(this).val(), createButton);
  });
}

function results(data){
  $("#search-results").empty();
  data.results.forEach(function(result) {
    $("#search-results").append("<br><button class='btn game-info' type='button' value=\""+ result.name + "\">" + result.name + "</button><br>");
  });
  $(".game-info").click(function(){
    $("#result").show();
    $("#game-name").text($(this).val());
    gameInfo($(this).val(), gameDescription, allPlatforms);
  });
}

$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
    var newName = $("#title").val();
    gameSearch(newName, results, "1", createButton);
  });
  $("#close").click(function(){
    $("#result").hide();
  })
});
