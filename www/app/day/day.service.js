'use strict';
(function () {
    app
    .service('DayService', DayService);

    DayService.$inject = [];
    function DayService() {
        
        return {
            serviceVar: "The service Var"
        }
    }
})();