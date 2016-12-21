'use strict';
(function () {
    app
    .controller('DayCtrl', DayCtrl);

    DayCtrl.$inject = ['$scope', '$stateParams', '$timeout'];
    function DayCtrl ($scope, $stateParams, $timeout) {

        $scope.bibleSelected = false;           //used for the background to be selected or not
        $scope.notes = 'dlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfs';

        $scope.textChanged = function() {
            console.log($scope.notes);
        }

        $scope.setHeight = function () {
            var listRect = document.getElementById("listRect");
            var rect = listRect.getBoundingClientRect();
            var bodyRect = document.body.getBoundingClientRect();
            var height = bodyRect.bottom - rect.bottom - 48;    //48 is always the height of the tabs
            var elems = document.getElementsByClassName("devotion-tab");
            for (var i = 0; i < elems.length; i++) {
                elems[i].style.height = height + "px";
            }
        };

        //selects the item from the list that just got clicked
        $scope.selectItem = function () {
            $scope.bibleSelected = true;
            $timeout(function () {
                $scope.bibleSelected = false;
            }, 500);
        };
    };
})();