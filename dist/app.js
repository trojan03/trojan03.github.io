var App;
(function (App) {
    var AboutController = (function () {
        function AboutController() {
        }
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
    var BlogPostController = (function () {
        function BlogPostController($http, $routeParams, $location) {
            var _this = this;
            this.$location = $location;
            this.toContent = "#!/blog";
            this.id = $routeParams.id;
            $http.get("dist/posts/posts.json").then(function (posts) {
                posts.data.forEach(function (post) {
                    if (post.id == _this.id)
                        document.title = post.title + " - Alymbek Sadybakasov";
                });
            });
            $http.get("dist/posts/" + this.id + ".md").then(function (result) {
                _this.content = "dist/posts/" + _this.id + ".md";
            });
        }
        return BlogPostController;
    }());
    App.BlogPostController = BlogPostController;
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
            redirectTo: '/about'
        });
    }
    App.routerConfig = routerConfig;
})(App || (App = {}));
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
