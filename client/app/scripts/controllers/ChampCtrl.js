angular.module("metacademy").controller(
"ChampCtrl", function ($scope, $location, $champions) {

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

    constructor();

    function constructor () {
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
});
