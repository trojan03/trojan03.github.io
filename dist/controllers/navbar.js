/** @ngInject */
var CompanyManagerApp;
(function (CompanyManagerApp) {
    function vNavbar() {
        return {
            restrict: 'E',
            templateUrl: "../../dist/views/navbarview.html",
            controller: NavbarController,
            controllerAs: 'navbar',
            bindToController: true
        };
    }
    CompanyManagerApp.vNavbar = vNavbar;
    /** @ngInject */
    var NavbarController = /** @class */ (function () {
        function NavbarController($location) {
            this.$location = $location;
            this.tab = "home";
        }
        NavbarController.prototype.switchTab = function (name) {
            this.tab = name;
            if (name === "about")
                this.$location.path("about");
            else
                this.$location.path("home");
        };
        return NavbarController;
    }());
    CompanyManagerApp.NavbarController = NavbarController;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=navbar.js.map