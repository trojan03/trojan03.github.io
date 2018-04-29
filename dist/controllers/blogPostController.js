var App;
(function (App) {
    var BlogPostController = /** @class */ (function () {
        function BlogPostController($http, $routeParams, $location) {
            var _this = this;
            this.$location = $location;
            this.id = $routeParams.id;
            this.hostUrl = "https://trojan03.github.com/";
            $http.get("dist/posts/" + this.id + ".md").then(function (result) {
                _this.content = "dist/posts/" + _this.id + ".md/";
            });
        }
        BlogPostController.prototype.toContent = function () {
            this.$location.path("blog");
        };
        return BlogPostController;
    }());
    App.BlogPostController = BlogPostController;
})(App || (App = {}));
//# sourceMappingURL=blogPostController.js.map