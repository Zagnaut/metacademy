function VersusCtrl($scope, $routeParams) {
    var player, opponent = {};
    
    player = {
        "1": "Player",
        "2": "champion",
        "3": "player"
    };

    opponent = {
        "1": "Opponent",
        "2": "opponent",
        "3": "opponent"
    }

    $scope.sides = [player, opponent];

    $scope.player   = typeof $routeParams.player   === "string" ? $routeParams.player : "";
    $scope.opponent = typeof $routeParams.opponent === "string" ? $routeParams.opponent : "";
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
