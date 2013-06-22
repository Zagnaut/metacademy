app.controller("PlayerCtrl", ["$scope", "$champions", function ($scope, $champions) {
    $scope.typeahead = $champions.typeaheadList;
    
    $scope.change = function() {
            $scope.setPlayer($scope.search);
    }
}]);
