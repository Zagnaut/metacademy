function MatchupsCtrl($scope, $matchups) {
    $scope.list = $matchups.getMatchups();

    $scope.getTimes = function(n) {
        var times = [1,2,3,4,5,6];
        return times;
    }
}
