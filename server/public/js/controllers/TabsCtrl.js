function TabsCtrl($scope) {
    $scope.tabs = ["matchups", "protips"];

    $scope.selection = $scope.tabs[0];

    $scope.matchupsTab = function() {
        $scope.selection = $scope.tabs[0];
    };
    $scope.protipsTab = function() {
        $scope.selection = $scope.tabs[1];
    };
}
