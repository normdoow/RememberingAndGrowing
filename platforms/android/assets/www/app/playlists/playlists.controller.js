'use strict';
(function () {
    app
    .controller('PlaylistsCtrl', PlaylistsCtrl);
    
    PlaylistsCtrl.$inject = ['$scope', 'PlaylistsService'];
    function PlaylistsCtrl ($scope, PlaylistsService) {
        
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 },
            { title: PlaylistsService.serviceVar, id: 7 }
        ];
    }
})();