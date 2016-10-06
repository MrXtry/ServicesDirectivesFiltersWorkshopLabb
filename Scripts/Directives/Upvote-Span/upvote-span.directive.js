/// <reference path="../../angular.js" />

angular.module("mainModule")
    .directive("upvoteSpan", [
        function () {
            return {
                restrict: "E",
                
                templateUrl: "Scripts/Directives/Upvote-Span/Upvote-Span.html"
            }
        }
    ]);