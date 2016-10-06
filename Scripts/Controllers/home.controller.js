/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Home";
            $scope.search = "";

            $scope.subscribe = function (author) {
                $scope.subscribedAuthors.push(author);

                $scope.saveSubscribedAuthors();
            };

            //$scope.searchFilter = function (search) {
            //    return function (item) {
            //        //console.log(item.author);
            //        if (item.author === "Ninib") {
            //            return item.author === "Ninib";
            //        }
            //        else
            //            return item;
            //    };
            //    //console.log($scope.search);
            //    //if (posts.author == $scope.search) {
            //    //    return true;
            //    //} else {
            //    //    return true;
            //    //}
            //    //return posts;
            //};


            //console.log($scope.searchFilter(1));

            $scope.upvotePost = function (post) {
                postsApi.upvotePost(post.id)
                    .then(function () {
                        var index = $scope.posts.map(function (post) {
                            return post.id;
                        }).indexOf(post.id);

                        $scope.posts[index].upvotes += 1;
                    });
            };

            $scope.downvotePost = function (post) {
                postsApi.downvotePost(post.id)
                    .then(function () {
                        var index = $scope.posts.map(function (post) {
                            return post.id;
                        }).indexOf(post.id);

                        $scope.posts[index].downvotes += 1;
                    });
            };
        }
    ]);