var gameSearch = function(name, results){
  $.ajax({
    url: "http://api.giantbomb.com/search/",
    type: "get",
    data: {api_key : "1deed2e185fd05e46a6e934caf89d5516d94f288", query: name, resources : "game", field_list : "name, resource_type, image", format : "json" },
    dataType: "json"
  })
  .then(function(data) {
    results(data);
  });
};

var gameInfo = function(name, results){
  $.ajax({
    url: "http://api.giantbomb.com/search/",
    type: "get",
    data: {api_key : "1deed2e185fd05e46a6e934caf89d5516d94f288", query: name, resources : "game", field_list : "name, deck, image, original_release_date", format : "json" },
    dataType: "json"
  })
  .then(function(data) {
    console.log(data);
  });
};

exports.gameSearchModule = gameSearch;
exports.gameInfoModule = gameInfo;
