/** @ngInject */
module CompanyManagerApp {
  export function routerConfig($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.location.ILocationProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'dist/views/aboutview.html',
        controller: AboutController,
        controllerAs: 'aboutController'
      })
      .when('/home', {
        templateUrl: 'dist/views/mainview.html',
        controller: MainController,
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/home'
      });
       $locationProvider.html5Mode(true);
  }
}
