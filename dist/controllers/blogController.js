var App;
(function (App) {
    var BlogPost = /** @class */ (function () {
        function BlogPost(id, title, summary, date) {
            this.id = id;
            this.title = title;
            this.summary = summary;
            this.date = date;
        }
        return BlogPost;
    }());
    App.BlogPost = BlogPost;
    var BlogController = /** @class */ (function () {
        function BlogController($http, $location) {
            var _this = this;
            this.$location = $location;
            this.posts = new Array();
            var url = "dist/posts/posts.json";
            $http.get(url).then(function (result) {
                result.data.forEach(function (post) {
                    _this.posts.push(new BlogPost(post.id, post.title, post.summary, post.date));
                });
            });
        }
        BlogController.prototype.openPost = function (postId) {
            this.$location.path("blog/" + postId);
            document.title = "post1" + " - Alymbek Sadybakasov";
        };
        return BlogController;
    }());
    App.BlogController = BlogController;
})(App || (App = {}));
//# sourceMappingURL=blogController.js.map