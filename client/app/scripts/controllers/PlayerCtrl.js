angular.module("metacademy").controller("PlayerCtrl",
    function ($scope, $location, $champions) {

        $scope.typeahead = $champions.typeaheadList;

        // Triggers change function when text in input changes
        $scope.change = function() {
            $scope.setPlayer($scope.search);
        }
    }
);
