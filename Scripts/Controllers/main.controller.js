/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "postsApi",
        function ($scope, $location, $route, postsApi) {
            $scope.$route = $route;
            $scope.posts = [];
            $scope.subscribedAuthors = [];

            $scope.loadSubscribedAuthors = function () {
                var dataString = localStorage.getItem("subscribedAuthors");
                if (dataString)
                    $scope.subscribedAuthors = JSON.parse(dataString);
            }

            $scope.saveSubscribedAuthors = function () {
                var jsonString = JSON.stringify($scope.subscribedAuthors);
                localStorage.setItem("subscribedAuthors", jsonString);
                console.log("Save");
            }

            postsApi.getPosts()
                .then(function (data) {
                    if (data != null)
                        $scope.posts = data;
                })

            $scope.go = function (url) {
                $location.path(url);
            };

            $scope.loadSubscribedAuthors();
        }
    ]);