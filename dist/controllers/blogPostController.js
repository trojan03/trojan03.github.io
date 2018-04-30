var App;
(function (App) {
    var BlogPostController = /** @class */ (function () {
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
//# sourceMappingURL=blogPostController.js.map