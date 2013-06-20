function MatchupsCtrl($scope, $matchups) {
    $scope.matchups = $matchups.getMatchups();

    $scope.onPlayerSelect = function (matchup) {
      $scope.setPlayer(matchup.name);
    }

    $scope.onOpponentSelect = function (matchup) {
      $scope.setOpponent(matchup.name);
    }
}
