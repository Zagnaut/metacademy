angular.module("metacademy").controller("PlayerCtrl",
    function ($scope, $champions) {

        $scope.typeahead = $champions.typeaheadList;
        
        $scope.change = function() {
            $scope.setPlayer($scope.search);
        }
    }
);
