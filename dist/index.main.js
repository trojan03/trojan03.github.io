/// <reference path="../../typings/main.d.ts" />
var App;
(function (App) {
    var app = angular.module('personalApp', ['ngRoute'])
        .controller('mainController', App.MainController)
        .controller('aboutController', App.AboutController)
        .controller('blogController', App.BlogController)
        .config(App.routerConfig);
    app.directive("vNavbar", App.vNavbar);
})(App || (App = {}));
//# sourceMappingURL=index.main.js.map