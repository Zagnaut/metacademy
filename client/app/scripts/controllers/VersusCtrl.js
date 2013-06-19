angular.module("metacademy").controller(
"VersusCtrl", function ($scope, $location, $champions) {
    $scope.player = {
        "1": "Player",
        "2": "champion",
        "3": "player"
    };

    $scope.opponent = {
        "1": "Opponent",
        "2": "opponent",
        "3": "opponent"
    };

    $scope.sides = [$scope.player, $scope.opponent];

    $scope.setPlayer = function (championName) {
        $scope.player.champion = $champions.getByName(championName);
        updateLocation("player");
    };

    $scope.setOpponent = function (championName) {
        $scope.opponent.champion = $champions.getByName(championName);
        updateLocation("opponent");
    };

    constructor();

    // Sets the champions from the url params upon controller creation
    function constructor () {
        var params = $location.search();
        if (typeof params.player == "string")
            $scope.setPlayer(params.player);
        if (typeof params.opponent == "string")
            $scope.setOpponent(params.opponent);
    }

    function updateLocation(champion) {
        if ($scope[champion].champion !== undefined && $scope[champion].champion.name !== undefined ) {
            $location.search(champion, $scope[champion].champion.name);
        } else {
            $location.search(champion, null);
        }

        // if ($scope.opponent.champion !== undefined && $scope.opponent.champion.name !== undefined) {
        //     $location.search("opponent", $scope.opponent.champion.name);
        // } else {
        //     $location.search("opponent", null);
        // }
    }
});