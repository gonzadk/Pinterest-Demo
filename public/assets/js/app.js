var galeryApp = angular.module('galeryApp', ['angularGrid', 'ngSanitize']);
galeryApp.controller('indexCtrl', ['$scope', '$window', 'imageService', 'angularGridInstance',
    function ($scope, $window, imageService, angularGridInstance) {

        $scope.searchField = "";
        var images = imageService.images;

        if (imageService.randomize) images = shuffleArray(images);
        $scope.imageList = angular.copy(images);

        /*
         * apply search on the list base on searchField
         * which can be binded to an input element
         */
        $scope.$watch('searchField', function (val) {
            //	val = val.toLowerCase().replace(/\s|-/g, "");
            val = val.toLowerCase();
            console.log(val);
            $scope.imageList = images.filter(function (obj) {

                for (var i = 0; i < obj.keywords.length; i++) {
                    if (obj.keywords[i].toLowerCase().indexOf(val) != -1) {
                        return true;
                    }
                }
                return false;
            });

        });

        /*
         * For refresh the grid manually
         */
        $scope.refresh = function () {
            angularGridInstance.gallery.refresh();
        };

        $scope.gridOptions = {
            width: 350, //minumum width of a grid, this may increase to take whole space of container
            gutterSize: 15,
        };

        $scope.openWindow = function (url) {
            $window.open(url);
        };
    }
]);
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
durstenfeldAlgoritm = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

shuffleArray = function (array) {
    var premiums = []; //for premiums items.. This items must be first
    var shuffleable = []; //for regular items.. This items need be shuffled
    var categories = {
        'uncategorized': []
    };
    /*
     * Checking Premiums
     */
    for (var i = 0; i < array.length; i++) {
        if (array[i].premium && array[i].premium === true) {
            premiums.push(array[i]);
        } else shuffleable.push(array[i]);
    }

    durstenfeldAlgoritm(shuffleable);

    /*
     * Group by category
     */
    var uncategorizedCount = 0;
    for (var i in shuffleable) {
        var value = shuffleable[i];
        if (value.hasOwnProperty('category')) {
            if (!categories.hasOwnProperty(value.category)) {
                categories[value.category] = [];
            }
            categories[value.category].push(value);
        } else {
            uncategorizedCount++;
            categories['category'+uncategorizedCount] = [];
            categories['category'+uncategorizedCount].push(value);
        }
    }

    /*
     * merge groups with premiums
     */
    
    for (var i in categories) {
        for (var index in categories[i]) {
            premiums.push(categories[i][index]);
        }
    }

    return premiums;
}