angular.module("metacademy").controller("ChampCtrl",
    function ($scope, $location, $champions) {

        $scope.typeahead = $champions.typeaheadList;


        // Triggers change function when text in input changes
        $scope.change = function() {
            if (isPlayer()) {
                $scope.setPlayer($scope.search);
                $scope.champion = $scope.player.champion;
            } else if (isOpponent()) {
                $scope.setOpponent($scope.search);
                $scope.champion = $scope.opponent.champion;
            }
        }

        // Unsuccessful attempt to watch champion state VersusCtrl's scope.

        // $scope.$watch($scope.player.champion, function(newValue, oldValue, scope) {
        //     if (newValue && newValue !== oldValue) {
        //         initialize();
        //     }
        // });

        // $scope.$watch($scope.opponent.champion, function(newValue, oldValue, scope) {
        //     if (newValue && newValue !== oldValue) {
        //         initialize();
        //     }
        // });
        
    
        // Sets local champions on controller load.
        initialize();

        function initialize () {
            if (isPlayer()) {
                $scope.champion = $scope.player.champion;
            } else if (isOpponent()) {
                $scope.champion = $scope.opponent.champion;
            }
        }

        // This seems inelegant. Should Champ ctrl be subclassed out into two contollers, each responsible for a side?

        function isPlayer() {
            return $scope.each["1"] === "Player";
        }

        function isOpponent() {
            return $scope.each["1"] === "Opponent";
        }
    }
);
