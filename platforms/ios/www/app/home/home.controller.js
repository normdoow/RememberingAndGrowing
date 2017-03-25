'use strict';
(function () {
    app
    .controller('HomeCtrl', HomeCtrl);
    
    HomeCtrl.$inject = ['$scope', 'HomeService', 'ListViewService', '$timeout', '$location'];    //ListView is in here to make json load faster
    function HomeCtrl ($scope, HomeService, ListViewService, $timeout, $location) {

        $timeout(function () {
            $scope.currentDevo = ListViewService.getCurrentDevo();
        }, 500);

        $scope.goToDay = function ( path ) {
            $location.path( path );
        };
    }
})();