/// <reference path="../angular.js" />

angular.module("mainModule")
    .filter("orderObjectBy", function () {
        return function (input, attribute) {
         
            if (!angular.isObject(input)) return input;

            var array = [];

            var item;
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }

            function compareTitle(a, b) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
                return 0;
            }

            function compareAuthor(a, b) {
                if (a.author < b.author)
                    return -1;
                if (a.author > b.author)
                    return 1;
                return 0;
            }

            function comparePostDate(a, b) {
                if (a.postDate < b.postDate)
                    return -1;
                if (a.postDate > b.postDate)
                    return 1;
                return 0;
            }

            if (attribute == "title") {
                array.sort(compareTitle);
            }
            else if (attribute == "author") {
                array.sort(compareAuthor);
            }
            else if (attribute == "postDate") {
                array.sort(comparePostDate);
            }

           
            return array;
        }
    });