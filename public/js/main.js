var app = angular.module("metacademy", ["$strap.directives"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/versus", {templateUrl: "/partials/versus.html"})
            .when("/versus/:player", {templateUrl: "/partials/versus.html"})
            .when("/versus/:player/:opponent", {templateUrl: "/partials/versus.html"})
            .otherwise({redirectTo: "/index"});
    }]);

app.factory("RemainingChampions", function(){
    var newChamps = [
        {
            _id: 0,
            name: "Lissandra",
            title: "the Ice Witch",
            imageUrl: "",
            abilities: []
        }
    ]
    return newChamps;
});

function VersusCtrl($scope) {
    var player, opponent = {};
    player = {
        "1": "Player",
        "2": "champion"
    };
    opponent = {
        "1": "Opponent",
        "2": "opponent",
    }

    $scope.sides = [player, opponent];
}

function TabsCtrl($scope) {
    $scope.tabs = ["matchups", "protips"];

    $scope.selection = $scope.tabs[0];

    $scope.matchupsTab = function() {
        $scope.selection = $scope.tabs[0];
    };
    $scope.protipsTab = function() {
        $scope.selection = $scope.tabs[1];
    };
}

function ChampCtrl($scope, Champions) {
    $scope.champions = Champions;

    $scope.findChampionByName = function (name) {
        for (var i = 0; i < $scope.champions.length; i++) {
            if ($scope.champions[i].name === capitalize(name)) {
                return $scope.champions[i];
            }
        }

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
    $scope.change = function() {
        $scope.champion = $scope.findChampionByName($scope.search);
    }
}

function ProtipsCtrl($scope, Protips) {
    $scope.protips = Protips;
}

function MatchupsCtrl($scope, Protips) {
    $scope.getTimes = function(n) {
        var times = [1,2,3,4,5,6];
        return times;
    }
}

app.directive("autoComplete", function($timeout){
    return function(scope, elem, attrs) {
        elem.autocomplete({
            source: champNames,
            select: function() {
                $timeout(function() {
                    elem.trigger('input'); 
                }, 0);
            }
        });    };
});

var requestAllChampions = function() {
    $http({method: "GET", url: "/api/champions"}).
            success(function(data, status, headers, config) {
                // $scope.champions = data;
                console.log(data);
            }).
            error(function(data, status, headers, config) {
                console.log(data);
            });
}