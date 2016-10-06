/// <reference path="../../angular.js" />

angular.module("mainModule")
    .directive("downvoteSpan", [
        function () {
            return {
                restrict: "E",
                
                templateUrl: "Scripts/Directives/Downvote-Span/Downvote-Span.html"
            }
        }
    ]);