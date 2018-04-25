/// <reference path="../../typings/main.d.ts" />
var CompanyManagerApp;
(function (CompanyManagerApp) {
    var app = angular.module('personalApp', ['ngRoute'])
        .controller('mainController', CompanyManagerApp.MainController)
        .controller('aboutController', CompanyManagerApp.AboutController)
        .config(CompanyManagerApp.routerConfig);
    app.directive("vNavbar", CompanyManagerApp.vNavbar);
    app.run(['$location', function ($location) {
            $location.path('/home');
        }]);
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=index.main.js.map