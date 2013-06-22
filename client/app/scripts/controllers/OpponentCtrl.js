app.controller("OpponentCtrl", ["$scope", "$champions", function ($scope, $champions) {
    $scope.typeahead = $champions.typeaheadList;

    // Triggers change function when text in input changes
    $scope.change = function() {
        $scope.setOpponent($scope.search);
    }
}]);
