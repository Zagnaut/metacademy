app.controller("VersusCtrl", ["$scope", "$location", "$champions", function ($scope, $location, $champions) {
    $scope.setPlayer = function (championName) {
        $scope.player = $champions.getByName(championName);
        updateLocation("player");
    };

    $scope.setOpponent = function (championName) {
        $scope.opponent = $champions.getByName(championName);
        updateLocation("opponent");
    };

    $scope.currentState = function() {
        if ($scope.player && $scope.opponent) {
            return "versus";
        } else if ($scope.player && !$scope.opponent) {
            return "for";
        } else if ($scope.opponent && !$scope.player) {
            return "against";
        } else {
            return "empty";
        }
    }

    // Calls itself to sets the champions from the url params upon controller creation
    var initialize = (function() {
        var params = $location.search();

        if (params.player) $scope.setPlayer(params.player);
        if (params.opponent) $scope.setOpponent(params.opponent);
    })();


    // Accepts the which string to access the appropriate object on VersusCtrl's scope and set the query string appropriately
    function updateLocation (which) {
        if ($scope[which] !== undefined && $scope[which].name !== undefined ) {
            $location.search(which, $scope[which].name);
        } else {
            $location.search(which, null);
        }
    }
}]);