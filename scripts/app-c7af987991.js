/******/!function(a){function n(o){if(t[o])return t[o].exports;var l=t[o]={exports:{},id:o,loaded:!1};return a[o].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}// webpackBootstrap
/******/
var t={};return n.m=a,n.c=t,n.p="",n(0)}([function(a,n,t){var o,l=t(1),r=t(2),i=t(3),e=t(4),c=t(5),s=t(6);!function(a){"use strict";angular.module("sadybakasovApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngRoute"]).config(l.config).config(r.routerConfig).run(i.runBlock).controller("MainController",e.MainController).controller("AboutController",c.AboutController).directive("navbar",s.navbar)}(o||(o={}))},function(a,n){function t(a){a.debugEnabled(!0)}n.config=t},function(a,n){function t(a,n){a.when("/stuff",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/about",{templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"about"}).otherwise({redirectTo:"/about"}),n.html5Mode(!0)}n.routerConfig=t},function(a,n){function t(a){a.debug("runBlock end")}n.runBlock=t},function(a,n){var t=function(){function a(){}return a}();n.MainController=t},function(a,n){var t=function(){function a(){}return a}();n.AboutController=t},function(a,n){function t(){return{restrict:"E",templateUrl:"app/components/navbar/navbar.html",controller:o,controllerAs:"navbar",bindToController:!0}}n.navbar=t;var o=function(){function a(a){this.$location=a;var n=this.$location.url().replace("/","");this.tab=n}return a.prototype.switchTab=function(a){this.tab=a,"stuff"===a?this.$location.path("stuff"):this.$location.path("about")},a}();n.NavbarController=o}]),angular.module("sadybakasovApp").run(["$templateCache",function(a){a.put("app/about/about.html",'<div class="container text-center"><div class=row style="height: 100px"></div><div class=row><div class=col>Picture</div><div class=col>Comming soon...</div></div></div>'),a.put("app/main/main.html",'<div class="container text-center"><div class=row style="height: 100px"></div><div class="row mb-5"><div class=col>16.04.2018</div><div class=col>Comming soon...</div><div class=col><!--<a href="#">link1</a>--></div></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="border-bottom: 1px solid lightgrey; background-color: #ffffff"><a class="navbar-brand ml-5" href="" ng-click="navbar.switchTab(\'about\')" style="color: #88c3c8">Alymbek Sadybakasov</a><div class="collapse navbar-collapse d-flex justify-content-end mr-5"><ul class=navbar-nav><li class=nav-item ng-class="navbar.tab==\'about\' ? \'active\' : \'\'"><a class=nav-link href="" ng-click="navbar.switchTab(\'about\')">About</a></li><li class=nav-item ng-class="navbar.tab==\'stuff\' ? \'active\' : \'\'"><a class=nav-link href="" ng-click="navbar.switchTab(\'stuff\')">Stuff</a></li><li class=nav-item><a class=nav-link href=https://www.linkedin.com/in/alymbek-sadybakasov/ target=_blank>linkedin</a></li><li class=nav-item><a class=nav-link href=https://github.com/trojan03 target=_blank>github</a></li></ul></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-c7af987991.js.map
