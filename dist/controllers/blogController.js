var App;
(function (App) {
    var BlogController = /** @class */ (function () {
        function BlogController($http) {
            var _this = this;
            $http.get("http://127.0.0.1:8080/blogposts.json").then(function (result) {
                _this.posts = result.data;
            });
        }
        return BlogController;
    }());
    App.BlogController = BlogController;
})(App || (App = {}));
//# sourceMappingURL=blogController.js.map