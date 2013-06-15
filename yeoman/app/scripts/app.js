var app = angular.module("metacademy", ["$strap.directives"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/versus", {
                templateUrl: "/views/versus/index.html",
                controller: "VersusCtrl"
            })
            // .when("/versus/:player", {templateUrl: "/views/versus/index.html", controller: "VersusCtrl"})
            // .when("/versus/:player/:opponent", {templateUrl: "/views/versus/index.html", controller: "VersusCtrl"})
            .when("/", {
                templateUrl: "/views/index/index.html"
            }) 
            .otherwise({
                redirectTo: "/"
            });
    }]);

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
