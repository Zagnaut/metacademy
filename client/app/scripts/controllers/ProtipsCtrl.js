function ProtipsCtrl($scope, $protips) {
  $scope.protips = $protips.findProtips();

  $scope.load = function() {
    // Load more protips from server
  };

  $scope.post = function() {
    // Create a new protip from form.
  };
}