'use strict';
(function () {
    app
    .controller('ListViewCtrl', ListViewCtrl);
    
    ListViewCtrl.$inject = ['$scope', 'ListViewService', '$timeout'];
    function ListViewCtrl ($scope, ListViewService, $timeout) {
        
        $scope.list = [
            { title: 'Title', id: 1, selected: false },
            { title: 'Title', id: 2, selected: false },
            { title: 'Title', id: 3, selected: false },
            { title: 'Title', id: 4, selected: false },
            { title: 'Title', id: 5, selected: false },
            { title: 'Title', id: 6, selected: false },
            { title: 'Title', id: 7, selected: false },
            { title: 'Title', id: 8, selected: false },
            { title: 'Title', id: 9, selected: false },
            { title: 'Title', id: 10, selected: false },
            { title: 'Title', id: 11, selected: false },
            { title: 'Title', id: 12, selected: false },
            { title: 'Title', id: 13, selected: false },
            { title: 'Title', id: 14, selected: false },
            { title: 'Title', id: 15, selected: false },
            { title: 'Title', id: 16, selected: false },
            { title: 'Title', id: 17, selected: false },
            { title: 'Title', id: 18, selected: false },
            { title: 'Title', id: 19, selected: false },
            { title: 'Title', id: 20, selected: false },
            { title: 'Title', id: 21, selected: false },
        ];

        //selects the item from the list that just got clicked
        $scope.selectItem = function (index) {
            $scope.list[index].selected = true;
            $timeout(function () {
                $scope.list[index].selected = false;
            }, 500);
        };
    }
})();