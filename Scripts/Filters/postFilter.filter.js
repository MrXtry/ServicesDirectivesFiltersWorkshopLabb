/// <reference path="../angular.js" />

//TODO: fix the filter...

angular.module("mainModule")
    .filter("postfilter", [
        function () {
            return function (posts, search) {
                var output = posts;
                
                return output;
                
            }
        }
    ]);