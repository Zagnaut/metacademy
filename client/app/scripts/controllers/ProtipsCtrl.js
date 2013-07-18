app.controller("ProtipsCtrl", ["$scope", "$protips", function ($scope, $protips) {
  $scope.protips = [
    {
      user: "Zagnaut",
      description: "Spin 2 Win",
      content: "Garen, Katarina, Karthus, Xin Zhao",
      upvotes: 200,
    },{
      user: "Scarra",
      description: "Press R 2 win",
      content: "Garen, Katarina, Karthus, Xin Zhao",
      upvotes: 90,
    }
  ];

  $scope.load = function () {
    $scope.protips = $protips.getPlayer();
  };

  $scope.post = function() {
    $protips.post();
  };
}]);