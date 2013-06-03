function ChampCtrl($scope, $location, $champions) {

    $scope.change = function() {
        
        setChampion($scope.search);
    }

    updateChampions();

    // On controller init, fills the champion box.
    function updateChampions() {
        var set = isPlayer() ? $scope.player : $scope.opponent
        setChampion(set);
    }

    function setChampion(current) {
        $scope.search = current;
        $scope.champion = $champions.findByName($scope.search);
    }

    function updateLocation() {
        if (isPlayer()) {
            $location.path('/versus/').search({player: $scope.champion.name, opponent: $scope.opponent});
        } else if (isOpponent()) {
            $location.path('/versus/').search({player: $scope.player, opponent: $scope.champion.name});
        }
    }

    function isPlayer()   { return $scope.each["1"] === "Player"; }
    function isOpponent() { return $scope.each["1"] === "Opponent"; }
}
