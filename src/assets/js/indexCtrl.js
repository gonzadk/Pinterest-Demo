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