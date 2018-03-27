export class AboutController {
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, toastr: any) {
    this.classAnimation = '';
    this.creationDate = 1522098842700;
    this.toastr = toastr;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {

    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }
}
