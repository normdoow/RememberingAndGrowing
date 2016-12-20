'use strict';
(function () {
    app
    .controller('ListViewCtrl', ListViewCtrl);
    
    ListViewCtrl.$inject = ['$scope', 'ListViewService'];
    function ListViewCtrl ($scope, ListViewService) {
        
        $scope.list = [
            { title: 'Title', id: 1 },
            { title: 'Title', id: 2 },
            { title: 'Title', id: 3 },
            { title: 'Title', id: 4 },
            { title: 'Title', id: 5 },
            { title: 'Title', id: 6 },
            { title: 'Title', id: 7 },
            { title: 'Title', id: 8 },
            { title: 'Title', id: 9 },
            { title: 'Title', id: 10 },
            { title: 'Title', id: 11 },
            { title: 'Title', id: 12 },
            { title: 'Title', id: 13 },
            { title: 'Title', id: 14 },
            { title: 'Title', id: 15 },
            { title: 'Title', id: 16 },
            { title: 'Title', id: 17 },
            { title: 'Title', id: 18 },
            { title: 'Title', id: 19 },
            { title: 'Title', id: 20 },
            { title: 'Title', id: 21 },
        ];
    }
})();