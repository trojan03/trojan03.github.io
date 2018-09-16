var App;
(function (App) {
    var AboutController = (function () {
        function AboutController(usSpinnerService) {
            this.usSpinnerService = usSpinnerService;
        }
        AboutController.prototype.startSpinner = function () {
            this.usSpinnerService.spin('image-spinner');
        };
        AboutController.prototype.stopSpinner = function () {
            this.usSpinnerService.stop('image-spinner');
        };
        return AboutController;
    }());
    App.AboutController = AboutController;
})(App || (App = {}));
var App;
(function (App) {
    var BlogPost = (function () {
        function BlogPost(id, title, summary, date) {
            this.id = id;
            this.title = title;
            this.summary = summary;
            this.date = date;
        }
        return BlogPost;
    }());
    App.BlogPost = BlogPost;
    var BlogController = (function () {
        function BlogController($http, $location) {
            var _this = this;
            this.$location = $location;
            this.posts = new Array();
            var url = "dist/posts/posts.json";
            $http.get(url).then(function (result) {
                result.data.forEach(function (post) {
                    _this.posts.push(new BlogPost(post.id, post.title, post.summary, post.date));
                });
                _this.posts = _this.posts.slice().reverse();
            });
        }
        BlogController.prototype.openPost = function (postId) {
            return "#!/blog/" + postId;
        };
        return BlogController;
    }());
    App.BlogController = BlogController;
})(App || (App = {}));
var App;
(function (App) {
    var MainController = (function () {
        function MainController() {
        }
        return MainController;
    }());
    App.MainController = MainController;
})(App || (App = {}));
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
    var NavbarController = (function () {
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
var App;
(function (App) {
    function routerConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
            title: "About",
            templateUrl: 'dist/views/aboutview.html',
            controller: App.AboutController,
            controllerAs: 'aboutController'
        })
            .when('/stuff', {
            title: "Stuff",
            templateUrl: 'dist/views/mainview.html',
            controller: App.MainController,
            controllerAs: 'controller'
        })
            .when('/blog', {
            title: "Blog",
            templateUrl: 'dist/views/blogview.html',
            controller: App.BlogController,
            controllerAs: 'blogController'
        })
            .when('/blog/:id', {
            title: "Blog",
            templateUrl: 'dist/views/blogpostview.html',
            controller: App.BlogPostController,
            controllerAs: 'blogPostController'
        })
            .otherwise({
            redirectTo: '/blog'
        });
    }
    App.routerConfig = routerConfig;
})(App || (App = {}));
/// <reference path="controllers/mainController.ts" />
/// <reference path="controllers/navbarController.ts" />
/// <reference path="controllers/BlogController.ts" />
/// <reference path="index.route.ts" />
var App;
(function (App) {
    App.app = angular.module('personalApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'hc.marked',
        'bc.imagesloaded', 'angularSpinner', 'angulartics', 'angulartics.google.analytics'])
        .controller('mainController', App.MainController)
        .controller('aboutController', App.AboutController)
        .controller('blogController', App.BlogController)
        .config(App.routerConfig);
    App.app.directive("vNavbar", App.vNavbar);
    App.app.run(['$rootScope', '$route', function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
                document.title = $route.current.title + " - Alymbek Sadybakasov";
            });
            updateImageSize();
            linkInNewTab();
        }]);
    function updateImageSize() {
        marked.Renderer.prototype.image = function (href, title, text) {
            if (title) {
                var size = title.split('x');
                if (size[1]) {
                    size = 'width=' + size[0] + ' height=' + size[1];
                }
                else {
                    size = 'width=' + size[0];
                }
            }
            else {
                size = '';
            }
            return ('<img src="' + href + '" alt="' + text + '" ' + size + '>');
        };
    }
    function linkInNewTab() {
        marked.Renderer.prototype.link = function (href, title, text) {
            return '<a target="_blank" href="' + href + '" title="' + title + '">' + text + '</a>';
        };
    }
})(App || (App = {}));
/// <reference path="../index.main.ts" />
var App;
(function (App) {
    var BlogPostController = (function () {
        function BlogPostController($http, $routeParams, $location) {
            var _this = this;
            this.toContent = "#!/blog";
            this.id = $routeParams.id;
            $http.get("dist/posts/posts.json").then(function (posts) {
                posts.data.forEach(function (post) {
                    if (post.id == _this.id) {
                        _this.content_url = "dist/posts/" + _this.id + ".md";
                        document.title = post.title + " - Alymbek Sadybakasov";
                    }
                });
                $http.get(_this.content_url).then(function (result) {
                    _this.content = result.data;
                });
            });
        }
        return BlogPostController;
    }());
    App.BlogPostController = BlogPostController;
    App.app.controller('blogPostController', BlogPostController);
    App.app.config(['markedProvider', function (markedProvider) {
            markedProvider.setOptions({
                gfm: true,
                tables: true,
                highlight: function (code, lang) {
                    if (lang) {
                        return hljs.highlight(lang, code, true).value;
                    }
                    else {
                        return hljs.highlightAuto(code).value;
                    }
                }
            });
        }]);
})(App || (App = {}));
