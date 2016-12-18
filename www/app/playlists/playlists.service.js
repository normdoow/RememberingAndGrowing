'use strict';
(function () {
    app
    .service('PlaylistsService', PlaylistsService);

    PlaylistsService.$inject = [];
    function PlaylistsService() {
        
        return {
            serviceVar: "The service Var"
        }
    }
})();