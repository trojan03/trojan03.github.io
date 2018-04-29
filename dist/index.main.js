/// <reference path="../../typings/main.d.ts" />
var App;
(function (App) {
    var app = angular.module('personalApp', ['ngRoute', 'ngAnimate', 'btford.markdown'])
        .controller('mainController', App.MainController)
        .controller('aboutController', App.AboutController)
        .controller('blogController', App.BlogController)
        .directive('blogPostController', App.BlogPostController)
        .config(App.routerConfig);
    app.directive("vNavbar", App.vNavbar);
    app.run(['$rootScope', '$route', function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
                document.title = $route.current.title + " - Alymbek Sadybakasov";
            });
        }]);
})(App || (App = {}));
//# sourceMappingURL=index.main.js.map