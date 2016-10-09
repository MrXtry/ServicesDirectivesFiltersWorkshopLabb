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
            //    return function (post) {
                    
            //        if ((post.author != null && post.author == search) || (post.title != null && post.title == search)) {
            //            return true;
            //        }
            //        else if (search == ""){
            //            return true;
            //        }   
            //        else{
            //            return false;
            //        }
            //    }
            //}

            
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