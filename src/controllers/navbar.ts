/** @ngInject */
module CompanyManagerApp {
  export function vNavbar(): angular.IDirective {
      return {
        restrict: 'E',
        templateUrl: "../../dist/views/navbarview.html",
        controller: NavbarController,
        controllerAs: 'navbar',
        bindToController: true
      }
  }

  /** @ngInject */
  export class NavbarController {

    public tab: string;

    constructor(private $location: angular.ILocationService) {
      this.tab = "home";
    }

    public switchTab(name: string) {
    this.tab = name;
    if (name === "about")
      this.$location.path("about");
    else
      this.$location.path("home")
  }
  }

}
