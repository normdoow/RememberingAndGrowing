'use strict';
(function () {
    app
    .controller('DayCtrl', DayCtrl);

    DayCtrl.$inject = ['$scope', '$stateParams', '$timeout', '$location', '$window', '$ionicPopup', 'DayService'];
    function DayCtrl ($scope, $stateParams, $timeout, $location, $window, $ionicPopup, DayService) {

        $scope.bibleSelected = false;           //used for the background to be selected or not
        $scope.fontSelectSize = '16';
        $scope.notes = getNotes();
        $scope.devoCompleteCheckbox = isDevotionCompleted();
        $scope.dayObject = DayService.getDayObject();

        //functions
        $scope.getDevoNum = getDevoNum;
        $scope.clickedCheckbox = clickedCheckbox;
        $scope.openBibleGateWay = openBibleGateWay;
        
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
            setNotes($scope.notes);
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
        function showDoneAlert() {
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

        function clickedCheckbox() {
            if($scope.devoCompleteCheckbox) {
                setDevoCompleted();
                showDoneAlert();
            } else {
                setDevoUnCompleted();
            }
        }

        function openBibleGateWay() {
            $scope.selectItem();
            var bibleSearch = $scope.reading.replace(" ", "+");
            cordova.InAppBrowser.open("https://www.biblegateway.com/passage/?search=" + bibleSearch + "&version=ESV", 'location=yes');
        }

        function getDevoNum() {
            var url = $location.path();
            return url.replace('/app/day/', '');
        }

        //sets if a devo was completed in storage
        function setDevoCompleted() {
            window.localStorage.setItem('id' + getDevoNum(), 'true');
        }

        //sets if a devo was completed in storage
        function setDevoUnCompleted() {
            window.localStorage.setItem('id' + getDevoNum(), 'false');
        }

        //returns if a devotion was completed or not
        function isDevotionCompleted() {
            var val = window.localStorage.getItem('id' + getDevoNum());
            if(val && val !== undefined && val != "false") {
                return true;
            }
            return false;
        }

        function setNotes(value) {
            window.localStorage.setItem('notes' + getDevoNum(), value);
        }

        function getNotes() {
            var val = window.localStorage.getItem('notes' + getDevoNum());
            if(val && val !== undefined && val != "false") {
                return val;
            }
            return "";
        }

    };
})();