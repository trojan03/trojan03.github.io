/// <reference path="../../typings/main.d.ts" />
module CompanyManagerApp {

    var app = angular.module('personalApp', ['ngRoute'])
        .controller('mainController', MainController)
        .controller('aboutController', AboutController)
        .config(routerConfig);
    app.directive("vNavbar", vNavbar);
    app.run(['$location', function ($location) {
    $location.path('/home');
}]);

}
