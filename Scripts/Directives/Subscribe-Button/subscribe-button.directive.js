/// <reference path="../../angular.js" />

angular.module("mainModule")
    .directive("subscribeButton", [
        function () {
            return {
                restrict: "E",

                templateUrl: "Scripts/Directives/Subscribe-Button/Subscribe-Button.html"
            }
        }
    ]);