app.controller("ProtipsCtrl", ["$scope", "$protips", function ($scope, $protips) {
  $scope.protips = [];

  $scope.load = function() {
    $scope.protips = $protips.get();
  };

  $scope.post = function() {
    // Create a new protip from form.
  };
}]);