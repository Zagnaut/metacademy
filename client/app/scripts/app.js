var app = angular.module("metacademy", ["$strap.directives", "ngResource"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/versus", {
                templateUrl: "/views/versus/index.html",
                reloadOnSearch: false
            })
            .when("/", {
                templateUrl: "/views/index/index.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);
