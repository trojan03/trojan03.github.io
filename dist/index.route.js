/** @ngInject */
var App;
(function (App) {
    function routerConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
            templateUrl: 'dist/views/aboutview.html',
            controller: App.AboutController,
            controllerAs: 'aboutController'
        })
            .when('/stuff', {
            templateUrl: 'dist/views/mainview.html',
            controller: App.MainController,
            controllerAs: 'controller'
        })
            .otherwise({
            redirectTo: '/about'
        });
    }
    App.routerConfig = routerConfig;
})(App || (App = {}));
//# sourceMappingURL=index.route.js.map