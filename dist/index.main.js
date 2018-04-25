/// <reference path="../../typings/main.d.ts" />
var CompanyManagerApp;
(function (CompanyManagerApp) {
    var app = angular.module('personalApp', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages'])
        .controller('mainController', CompanyManagerApp.MainController)
        .controller('aboutController', CompanyManagerApp.AboutController)
        .config(CompanyManagerApp.routerConfig);
    app.directive("vNavbar", CompanyManagerApp.vNavbar);
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=index.main.js.map