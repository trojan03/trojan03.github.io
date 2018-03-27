/** @ngInject */
export function acmeNavbar(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      creationDate: '='
    },
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'navbar',
    bindToController: true
  };

}

/** @ngInject */
export class NavbarController {
  public relativeDate: string;
  // "this.creationDate" is initialized by directive option "bindToController: true"
  public creationDate: number;

  public tab: string;

  constructor(moment: moment.MomentStatic, private $location: angular.ILocationService) {
    this.relativeDate = moment(this.creationDate).fromNow();
    this.tab = "home";
  }

  public switchTab(name: string) {
    this.tab = name;
    if (name === "about")
      this.$location.path("about");
    else
      this.$location.path("stuff")
  }
}
