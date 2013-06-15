function ChampCtrl($scope, $location, $champions) {

    $scope.typeahead = $champions.typeaheadList;

    $scope.change = function() {
        setChampion($scope.search);
    }

    updateChampions();

    function updateChampions() {
        setChampion(isPlayer() ? $scope.player : $scope.opponent);
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

    function isFilled() {
        if (null !== champion)
            return true;
        else
            return false;
    }

    function isPlayer() {
        return $scope.each["1"] === "Player";
    }
}
