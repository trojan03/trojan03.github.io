/// <reference path="../../typings/main.d.ts" />
module CompanyManagerApp {

    var app = angular.module('personalApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages'])
        .controller('mainController', MainController)
        .controller('aboutController', AboutController)
        .config(routerConfig);
    app.directive("vNavbar", vNavbar);

}
