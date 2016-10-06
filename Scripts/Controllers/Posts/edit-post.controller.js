/// <reference path="../../angular.js" />

angular.module("mainModule")
    .controller("EditPostController", [
        "$scope",
        "$routeParams",
        "postsApi",
        function ($scope, $routeParams, postsApi) {
            $scope.title = "Update post";

            $scope.post = $scope.posts.filter(function (post) {
                return post.id == $routeParams.id;
            })[0];

            $scope.updatePost = function () {
                postsApi.updatePost($scope.post)
                    .then(function (data) {
                        $scope.post = data;
                        $scope.go("/Cms");
                    });
            };
        }
    ]);