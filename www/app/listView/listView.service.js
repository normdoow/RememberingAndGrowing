'use strict';
(function () {
    app
    .service('ListViewService', ListViewService);

    ListViewService.$inject = [];
    function ListViewService() {
        
        return {
            serviceVar: "The service Var"
        }
    }
})();