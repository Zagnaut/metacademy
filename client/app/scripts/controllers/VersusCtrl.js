angular.module("metacademy").controller("VersusCtrl",
    function ($scope, $location, $champions) {
        
        $scope.setPlayer = function (championName) {
            $scope.player = $champions.getByName(championName);
            updateLocation("player");
        };

        $scope.setOpponent = function (championName) {
            $scope.opponent = $champions.getByName(championName);
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


        // Accepts the which string to access the appropriate object on VersusCtrl's scope and set the query string appropriately
        function updateLocation(which) {
            if ($scope[which] !== undefined && $scope[which].name !== undefined ) {
                $location.search(which, $scope[which].name);
            } else {
                $location.search(which, null);
            }
        }
    }
);