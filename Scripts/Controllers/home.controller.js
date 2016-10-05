/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";

            $scope.subscribe = function (author) {
                $scope.subscribedAuthors.push(author);

                $scope.saveSubscribedAuthors();
            };

            $scope.deletePost = function (post) {
                postsApi.deletePost(post.id)
                    .then(function () {
                        var index = $scope.posts.map(function (post) {
                            return post.id;
                        }).indexOf(post.id);

                        $scope.posts.splice(index, 1);
                    });
            }
        }
    ]);