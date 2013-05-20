var app = angular.module("metacademy", []);

app.directive("autoComplete", function($timeout){
  return function(scope, elem, attr) {
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

function ChampCtrl($scope) {
  $scope.champions = champions;
  $scope.change = function() {
    $scope.champion = champions[$scope.search];  
  }
}