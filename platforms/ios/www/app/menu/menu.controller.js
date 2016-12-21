'use strict';
(function () {
    app
    .controller('MenuCtrl', MenuCtrl);
    MenuCtrl.$inject = ['$scope', '$stateParams', '$timeout'];
    function MenuCtrl ($scope, $stateParams, $timeout) {

        $scope.list = [
            { text: 'Home', url:'#/app/home', selected: false },
            { text: 'List View', url:'#/app/listView', selected: false }
        ];

        //selects the item from the list that just got clicked
        $scope.selectItem = function (index) {
            $scope.list[index].selected = true;
            $timeout(function () {
                $scope.list[index].selected = false;
            }, 500);
        };
    };
})();