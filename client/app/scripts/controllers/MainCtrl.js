app.controller("MainCtrl", ["$scope", "$authentication", function ($scope, $authentication) {
  $scope.$watch( $authentication.isLoggedIn, function(isLoggedIn) {
    $scope.isLoggedIn = isLoggedIn;
    $scope.currentUser = $authentication.currentUser;
  });
}]);