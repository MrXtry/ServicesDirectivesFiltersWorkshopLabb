/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscriptions";
            $scope.feed = [];

            $scope.getFeed = function () {
                $scope.feed = $scope.posts.filter(function (post) {
                    return $scope.subscribedAuthors.indexOf(post.author) != -1;
                });
            };

            $scope.unsubscribe = function (author) {
                
                var index = $scope.subscribedAuthors.indexOf(author);
                $scope.subscribedAuthors.splice(index, 1);

                $scope.saveSubscribedAuthors();
                $scope.getFeed();
            };

            $scope.getFeed();
        }
    ]);