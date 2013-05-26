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

function ChampCtrl($scope, Champions) {
    $scope.champions = Champions;

    $scope.findChampionByName = function (name) {
            for (var i = 0; i < $scope.champions.length; i++) {
                if ($scope.champions[i].name === name) {
                    return $scope.champions[i];
                }
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
    $scope.protips = Protips;
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
        });
    };
});

app.directive("champion", function() {
    return  function(scope, elem, attrs) {
        if (attrs.champion === "player") {
            var header = "Player"
            elem.header = header
        } else if (attr.champion === "opponent") {
            var header = "Opponent"
            elem.x = header
        }
    }
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