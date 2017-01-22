'use strict';
(function () {
    app
    .controller('ListViewCtrl', ListViewCtrl);
    
    ListViewCtrl.$inject = ['$scope', 'ListViewService', '$timeout'];
    function ListViewCtrl ($scope, ListViewService, $timeout) {

        $scope.$watch(ListViewService.getListViewObject(), function() {
            $scope.list = ListViewService.getListViewObject();
        });

        //selects the item from the list that just got clicked
        $scope.selectItem = function (index) {
            $scope.list[index].selected = true;
            $timeout(function () {
                $scope.list[index].selected = false;
            }, 500);
        };
    }
})();