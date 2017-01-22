'use strict';
(function () {
    app
    .controller('DayCtrl', DayCtrl);

    DayCtrl.$inject = ['$scope', '$stateParams', '$timeout', '$location', '$window', '$ionicPopup', 'DayService'];
    function DayCtrl ($scope, $stateParams, $timeout, $location, $window, $ionicPopup, DayService) {

        $scope.bibleSelected = false;           //used for the background to be selected or not
        $scope.fontSelectSize = '16';
        $scope.notes = 'dlkfsdlkfjaslkdfjslkdjfs dlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslk djfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdsl kjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjsl kdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkdfjslkdjfsdlkfjdslkjfdslkjfdlkfsdlkfjaslkd fjslkd jfsdlkfjdslk jfdslkjfdlkfsdlkfjaslkdf jslkdjfsdlkfjdslkjfdsl kjfdlkfsdlkfja';
        $scope.dayObject = DayService.getDayObject();

        //functions
        $scope.getDevoNum = getDevoNum;
        
        //init the service
        DayService.setPage(getDevoNum());

        //watches for the object with all the data to changes
        $scope.$watch('dayObject[0].title', function() {      //have to test for title because that changes
            var devotionData = $scope.dayObject[0];
            if(devotionData) {
                $scope.title = devotionData.title;
                $scope.devotionText = devotionData.text;
                $scope.reading = devotionData.reading;
                $scope.focusWord = devotionData.focusWord;
            }
        });

        $scope.textChanged = function() {
            console.log($scope.notes);
        };

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

        $scope.fontSizeChange = function() {
            console.log($scope.fontSelectSize);
        }

        function getDevoNum() {
            var url = $location.path();
            return url.replace('/app/day/', '');
        }

    };
})();