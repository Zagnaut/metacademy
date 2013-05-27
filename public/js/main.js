var app = angular.module("metacademy", ["$strap.directives"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/versus", {templateUrl: "/partials/versus/index.html"})
            .when("/versus/:player", {templateUrl: "/partials/versus.html"})
            .when("/versus/:player/:opponent", {templateUrl: "/partials/versus.html"})
            .when("/index", {templateUrl: "/partials/index/index.html"})
            .when("/", {templateUrl: "/partials/index/index.html"});
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
    $scope.list = [
        {
            "id":        "103",
            "name":      "Ahri",
            "title":     "the Nine-Tailed Fox",
            "portrait":  "http://na.leagueoflegends.com/sites/default/files/game_data/1.0.0.152/content/champion/icons/103.jpg",
            "upvotes":   13,
            "downvotes": 13
        }, {
            "id":        "1",
            "name":      "Annie",
            "title":     "the Dark Child",
            "portrait":  "http://na.leagueoflegends.com/sites/default/files/game_data/1.0.0.152/content/champion/icons/1.jpg",
            "upvotes":   1,
            "downvotes": 113
        }
    ];
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
