/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AboutController } from './about/about.controller';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module firstApp {
  'use strict';

  angular.module('firstApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'toastr'])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('AboutController', AboutController)
    .directive('acmeNavbar', acmeNavbar)
}
