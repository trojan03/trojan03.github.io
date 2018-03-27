/** @ngInject */
export function routerConfig($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.location.ILocationProvider) {
  $routeProvider
    .when('/stuff', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/about'
    });
     $locationProvider.html5Mode(true);
}
