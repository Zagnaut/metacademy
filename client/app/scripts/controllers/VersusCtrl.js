function VersusCtrl($scope, $routeParams) {
    var player, opponent = {};
    
    player = {
        "1": "Player",
        "2": "champion",
        "3": "player",
        champion: {}
    };

    opponent = {
        "1": "Opponent",
        "2": "opponent",
        "3": "opponent",
        champion: {}
    }

    $scope.sides = [player, opponent];

    $scope.player   = typeof $routeParams.player   === "string" ? $routeParams.player : "";
    $scope.opponent = typeof $routeParams.opponent === "string" ? $routeParams.opponent : "";
}
