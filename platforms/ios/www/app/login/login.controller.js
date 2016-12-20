'use strict';
(function () {
    app
    .controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', '$stateParams', '$ionicLoading', 'FbLoginService', 'InstagramService'];
    function loginCtrl ($scope, $stateParams, $ionicLoading, FbLoginService, InstagramService) {
        //class variables
        // $scope.sizeVal = null;
        // $scope.sizes = ['XS', 'S', 'M', 'L', 'XL'];

        // //functions
        // $scope.instagramLogin = instagramLogin;
        // $scope.facebookSignIn = facebookSignIn;
        

        // function instagramLogin () {
        //     InstagramService.instaLogin();
        // }

        // //This method is executed when the user press the "Login with facebook" button
        // function facebookSignIn () {
        //     //check if we are in the browser or not
        //     var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
        //     if (app) {
        //         FbLoginService.fbLogin($scope.sizeVal).then(function(result) {
        //             console.log("Response Object -> " + result);
        //             FbLoginService.saveUserDataInDatabase();
        //         }, function(error) {
        //             console.log("Error -> " + error);
        //         });
        //     } else {
        //         FbLoginService.fbLogin($scope.sizeVal);
        //         FbLoginService.saveUserDataInDatabase();
        //     }
        // }
        
    };
})();