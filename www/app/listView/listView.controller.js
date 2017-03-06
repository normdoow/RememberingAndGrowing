'use strict';
(function () {
    app
    .controller('ListViewCtrl', ListViewCtrl);
    
    ListViewCtrl.$inject = ['$scope', 'ListViewService', '$timeout', '$location', '$ionicScrollDelegate'];
    function ListViewCtrl ($scope, ListViewService, $timeout, $location, $ionicScrollDelegate) {

        //functions
        $scope.isDevotionCompleted = isDevotionCompleted;

        $scope.$watch(ListViewService.getListViewObject(), function() {
            $scope.list = ListViewService.getListViewObject();
            goTo(ListViewService.getCurrentDevoNumListView());
        });

        //selects the item from the list that just got clicked
        $scope.selectItem = function (index) {
            $scope.list[index].selected = true;
        };

        $scope.deselectItem = function (index) {
            $scope.list[index].selected = false;
        }

        function goTo(id) {
            $location.hash(id);
            $ionicScrollDelegate.anchorScroll();
        }

        //returns if a devotion was completed or not
        function isDevotionCompleted(devotionId) {
            var val = window.localStorage.getItem(devotionId);
            if(val && val !== undefined && val != "false") {
                return true;
            }
            return false;
        }
    }
})();