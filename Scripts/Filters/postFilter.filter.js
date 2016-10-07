/// <reference path="../angular.js" />

angular.module("mainModule")
    .filter("postfilter", [
        function () {
            return function (posts, search) {
                var output = posts;
                //console.log(output);
                ////angular.forEach(output, function (post) {
                ////    for (var key in post) {
                ////        if (post.hasOwnProperty(key) && typeof (post[key]) == typeof (""))
                ////            post[key] = post[key];
                ////    }
                ////});

                return output;
                //angular.forEach(output, function (word) {
                //    //console.log(word);
                //});
            }
        }
    ]);