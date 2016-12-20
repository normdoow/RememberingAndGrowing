'use strict';
(function () {
    app
    .controller('HomeCtrl', HomeCtrl);
    
    HomeCtrl.$inject = ['$scope', 'HomeService'];
    function HomeCtrl ($scope, HomeService) {
        
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