app.service("$matchups", function() {
  var list = [
    {
      "id":        "103",
      "name":      "Ahri",
      "title":     "the Nine-Tailed Fox",
      "portrait":  "http://na.leagueoflegends.com/sites/default/files/game_data/1.0.0.152/content/champion/icons/103.jpg",
      "upvotes":   13,
      "downvotes": 13
    }, {
      "id":        "1",
      "name":      "Annie",
      "title":     "the Dark Child",
      "portrait":  "http://na.leagueoflegends.com/sites/default/files/game_data/1.0.0.152/content/champion/icons/1.jpg",
      "upvotes":   1,
      "downvotes": 113
    }
  ];

  this.getMatchups = function() {
    return list;
  };
});