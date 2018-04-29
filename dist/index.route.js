/** @ngInject */
var App;
(function (App) {
    function routerConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
            title: "About",
            templateUrl: 'dist/views/aboutview.html',
            controller: App.AboutController,
            controllerAs: 'aboutController'
        })
            .when('/stuff', {
            title: "Stuff",
            templateUrl: 'dist/views/mainview.html',
            controller: App.MainController,
            controllerAs: 'controller'
        })
            .when('/blog', {
            title: "Blog",
            templateUrl: 'dist/views/blogview.html',
            controller: App.BlogController,
            controllerAs: 'blogController'
        })
            .when('/blog/:id', {
            title: "Blog",
            templateUrl: 'dist/views/blogpostview.html',
            controller: App.BlogPostController,
            controllerAs: 'blogPostController'
        })
            .otherwise({
            redirectTo: '/about'
        });
    }
    App.routerConfig = routerConfig;
})(App || (App = {}));
//# sourceMappingURL=index.route.js.map