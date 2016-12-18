'use strict';
(function () {
    app
    .controller('ListViewCtrl', ListViewCtrl);
    
    ListViewCtrl.$inject = ['$scope', 'ListViewService'];
    function ListViewCtrl ($scope, ListViewService) {
        
        $scope.list = [
            { title: 'Title 1', id: 1 },
            { title: 'Title 2', id: 2 },
            { title: 'Title 3', id: 3 },
            { title: 'Title 4', id: 4 },
            { title: 'Title 5', id: 5 },
            { title: 'Title 6', id: 6 }
        ];
    }
})();