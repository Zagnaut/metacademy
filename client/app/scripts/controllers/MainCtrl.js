app.controller("MainCtrl", function($scope, $authentication) {
  $scope.$watch( $authentication.isLoggedIn, function(isLoggedIn) {
    $scope.isLoggedIn = isLoggedIn;
    $scope.currentUser = $authentication.currentUser;
  })
})