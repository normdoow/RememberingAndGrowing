'use strict';
(function () {
    app
    .service('HomeService', HomeService);

    HomeService.$inject = [];
    function HomeService() {
        
        return {
            serviceVar: "The service Var"
        }
    }
})();