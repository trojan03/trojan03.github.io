/** @ngInject */
var App;
(function (App) {
    function vNavbar() {
        return {
            restrict: 'E',
            templateUrl: "../../dist/views/navbarview.html",
            controller: NavbarController,
            controllerAs: 'navbar',
            bindToController: true
        };
    }
    App.vNavbar = vNavbar;
    /** @ngInject */
    var NavbarController = /** @class */ (function () {
        function NavbarController($location) {
            this.$location = $location;
            if ($location.path().indexOf("blog") >= 0) {
                this.tab = "blog";
            }
            else {
                this.tab = $location.path().replace("/", "");
            }
        }
        NavbarController.prototype.switchTab = function (name) {
            this.tab = name;
            if (name === "about")
                this.$location.path("about");
            else if (name === "blog")
                this.$location.path("blog");
            else
                this.$location.path("stuff");
        };
        return NavbarController;
    }());
    App.NavbarController = NavbarController;
})(App || (App = {}));
//# sourceMappingURL=navbarController.js.map