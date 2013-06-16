function ProtipsCtrl($scope, $protips) {
    $scope.protips = $protips.findProtips();
}