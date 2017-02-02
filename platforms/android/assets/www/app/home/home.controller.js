'use strict';
(function () {
    app
    .controller('HomeCtrl', HomeCtrl);
    
    HomeCtrl.$inject = ['$scope', 'HomeService', 'ListViewService'];    //ListView is in here to make json load faster
    function HomeCtrl ($scope, HomeService, ListViewService) {
        
        $scope.list = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 },
            { title: HomeService.serviceVar, id: 7 }
        ];
    }
})();