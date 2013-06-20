angular.module("metacademy").controller("ChampCtrl",
    function ($scope, $location, $champions) {

        $scope.typeahead = $champions.typeaheadList;

        $scope.change = function() {
            if (isPlayer()) {
                $scope.setPlayer($scope.search);
                $scope.champion = $scope.player.champion;
            } else if (isOpponent()) {
                $scope.setOpponent($scope.search);
                $scope.champion = $scope.opponent.champion;
            }
        }

        // $scope.$watch($scope.player.champion, function(newValue, oldValue, scope) {
        //     if (newValue && newValue !== oldValue) {
        //         initialize();
        //     }
        // });

        // $scope.$watch($scope.opponent.champion, function(newValue, oldValue, scope) {
        //     if (newValue && newValue !== oldValue) {
        //         initialize();
        //     }
        // });
        

        initialize();

        function initialize () {
            if (isPlayer()) {
                $scope.champion = $scope.player.champion;
            } else if (isOpponent()) {
                $scope.champion = $scope.opponent.champion;
            }
        }

        function isPlayer() {
            return $scope.each["1"] === "Player";
        }

        function isOpponent() {
            return $scope.each["1"] === "Opponent";
        }
    }
);
