'use strict';
(function () {
    app
    .controller('DayCtrl', DayCtrl);

    DayCtrl.$inject = ['$scope', '$stateParams', '$timeout', '$location', '$window', '$ionicPopup'];
    function DayCtrl ($scope, $stateParams, $timeout, $location, $window, $ionicPopup) {

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

        //alert that shows the user that they completed a lesson
        $scope.showDoneAlert = function() {
            //TODO: save this data to somewhere
            var alertPopup = $ionicPopup.alert({
                title: 'Well Done!',
                template: 'You completed day ' + $scope.getDevoNum()
            });
            //take the user back to where they came from
            alertPopup.then(function(res) {
                $window.history.back();
            });
        };

        $scope.getDevoNum = function() {
            var url = $location.path();
            return url.replace('/app/day/', '');
        };

        $scope.ddSelectOptions = [
            {
                text: 'Option1',
                value: 'a value'
            },
            {
                text: 'Option2',
                value: 'another value',
                someprop: 'somevalue'
            },
            {
                // Any option with divider set to true will be a divider
                // in the menu and cannot be selected.
                divider: true
            },
            {
                // Any divider option with a 'text' property will
                // behave similarly to a divider and cannot be selected.
                divider: true,
                text: 'divider label'
            }
        ];

        $scope.ddSelectSelected = {}; // Must be an object
    };
})();