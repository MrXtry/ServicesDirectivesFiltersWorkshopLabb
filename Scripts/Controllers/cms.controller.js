/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("CmsController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "CMS";
            $scope.objectBy = "";
            $scope.tableTitle = "Title";
            $scope.tableAuthor = "Author";
            $scope.tablePostDate = "Post Date";

            $scope.getItem = function (text) {
                var objectBy = text.toLowerCase();
                objectBy = objectBy.replace(/\s+/g, '');
                
                $scope.objectBy = objectBy;
            }

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