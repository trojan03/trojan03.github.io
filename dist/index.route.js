/** @ngInject */
var CompanyManagerApp;
(function (CompanyManagerApp) {
    function routerConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
            templateUrl: 'dist/views/aboutview.html',
            controller: CompanyManagerApp.AboutController,
            controllerAs: 'aboutController'
        })
            .when('/home', {
            templateUrl: 'dist/views/mainview.html',
            controller: CompanyManagerApp.MainController,
            controllerAs: 'controller'
        })
            .otherwise({
            redirectTo: '/home'
        });
    }
    CompanyManagerApp.routerConfig = routerConfig;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=index.route.js.map