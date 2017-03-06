'use strict';
(function () {
    app
    .controller('MenuCtrl', MenuCtrl);
    MenuCtrl.$inject = ['$scope', '$stateParams', '$timeout', '$location', '$state'];
    function MenuCtrl ($scope, $stateParams, $timeout, $location, $state) {

        $scope.checkoutJournalSelected = false;
        $scope.tipsSelected = false;
        $scope.list = [
            { text: 'Home', path:'app.home', selected: false },
            { text: 'List View', path:'app.listView', selected: false }
        ];

        //selects the item from the list that just got clicked
        $scope.selectItem = function (index) {
            $scope.list[index].selected = true;
        };

        $scope.deselectItem = function (index) {
            $scope.list[index].selected = false;
        }

        $scope.openBLEWebsite = function () {
            $scope.checkoutJournalSelected = true;
            cordova.InAppBrowser.open("http://www.bleabundantlife.com/buy-journal", 'location=yes');
        }

        $scope.openBLEWebsiteBlog = function () {
            $scope.tipsSelected = true;
            cordova.InAppBrowser.open("http://www.bleabundantlife.com/blog", 'location=yes');
        }

        $scope.goToUrl = function (url, index) {
            $scope.selectItem(index)
            $location.path('app/listView');
            $location.replace();
        }
    };
})();