var app = angular.module("metacademy", ["$strap.directives"]);

app.factory("RemainingChampions", function(){
  var newChamps = [
    {
      _id: 0,
      name: "Lissandra",
      title: "the Ice Witch",
      imageUrl: "",
      abilities: []
    }
  ]
  return newChamps;
});


function ChampCtrl($scope, Champions) {
  $scope.champions = Champions;

  $scope.findChampionByName = function (name) {
      for (var i = 0; i < $scope.champions.length; i++) {
        if ($scope.champions[i].name === name) {
          return $scope.champions[i];
        }
      }
  }
  $scope.change = function() {
    $scope.champion = $scope.findChampionByName($scope.search);
  }
}

function ProtipsCtrl($scope, Protips) {
  $scope.protips = Protips;
}

app.directive("autoComplete", function($timeout){
  return function(scope, elem, attrs) {
    elem.autocomplete({
      source: champNames,
      select: function() {
        $timeout(function() {
          elem.trigger('input'); 
        }, 0);
      }
    });
  };
});

var requestAllChampions = function() {
  $http({method: "GET", url: "/api/champions"}).
      success(function(data, status, headers, config) {
        // $scope.champions = data;
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.log(data);
      });
}