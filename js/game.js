var gameSearch = function(name, results, pageNumber, createButton){
  $.ajax({
    url: "http://api.giantbomb.com/search/",
    type: "get",
    data: {api_key : "1deed2e185fd05e46a6e934caf89d5516d94f288", query: name, resources : "game", field_list : "name, resource_type, image", page : pageNumber, format : "json" },
    dataType: "json"
  })
  .then(function(data) {
    console.log(data);
    results(data);
    createButton(name, data.number_of_total_results);
  });
};

var gameInfo = function(name, gameDescription, allPlatforms){
  $.ajax({
    url: "http://www.giantbomb.com/api/search/?api_key=1deed2e185fd05e46a6e934caf89d5516d94f288&format=json&query=" + name + "&resources=game",
    // type: "get",
    // data: {api_key : "1deed2e185fd05e46a6e934caf89d5516d94f288", query: name, resources : "game", field_list : "name, deck, image, original_release_date", format : "json" },
    dataType: "json"
  })
  .then(function(data) {
    data.results.forEach(function(result){
      if (result.name === name)
      {
        gameDescription(result.deck, result.image.medium_url, result.original_release_date);
        allPlatforms(result.platforms);
      }
    });

  });
};

exports.gameSearchModule = gameSearch;
exports.gameInfoModule = gameInfo;
