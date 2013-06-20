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

    initialize();

    // Sets the champions from the url params upon controller creation
    function initialize () {
        var params = $location.search();
        if (typeof params.player == "string")
            $scope.setPlayer(params.player);
        if (typeof params.opponent == "string")
            $scope.setOpponent(params.opponent);
    }

    function updateLocation(which) {
        if ($scope[which].champion !== undefined && $scope[which].champion.name !== undefined ) {
            $location.search(which, $scope[which].champion.name);
        } else {
            $location.search(which, null);
        }
    }
});