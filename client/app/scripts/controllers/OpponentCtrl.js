angular.module("metacademy").controller("OpponentCtrl",
    function ($scope, $location, $champions) {

        $scope.typeahead = $champions.typeaheadList;

        // Triggers change function when text in input changes
        $scope.change = function() {
            $scope.setOpponent($scope.search);
        }
    }
);
