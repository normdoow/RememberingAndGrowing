'use strict';
(function () {
    /* directive used to run a function once the document is ready */
    app.directive('elemReady', function( $parse ) {
        return {
            restrict: 'A',
            link: function( $scope, elem, attrs ) {    
                elem.ready(function(){
                    $scope.$apply(function(){
                        var func = $parse(attrs.elemReady);
                        func($scope);
                    });
                });
            }
        }
    });
})();