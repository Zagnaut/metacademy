function VersusCtrl($scope, $routeParams) {
    var player, opponent = {};
    
    player = {
        "1": "Player",
        "2": "champion",
        "3": "player"
    };

    opponent = {
        "1": "Opponent",
        "2": "opponent",
        "3": "opponent"
    }

    $scope.sides = [player, opponent];

    $scope.player   = typeof $routeParams.player   === "string" ? $routeParams.player : "";
    $scope.opponent = typeof $routeParams.opponent === "string" ? $routeParams.opponent : "";
}
