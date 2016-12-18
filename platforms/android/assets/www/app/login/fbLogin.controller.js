'use strict';
(function () {
    app
    .controller('FbLoginCtrl', FbLoginCtrl);
    FbLoginCtrl.$inject = ['$scope', '$stateParams', '$ionicLoading', 'FbLoginService', 'InstagramService'];
    function FbLoginCtrl ($scope, $stateParams, $ionicLoading, FbLoginService, InstagramService) {
        //class variables
        $scope.sizeVal = null;
        $scope.sizes = ['XS', 'S', 'M', 'L', 'XL'];

        $scope.instagramLogin = function () {
            InstagramService.instaLogin();
        }

        //This method is executed when the user press the "Login with facebook" button
        $scope.facebookSignIn = function () {
            FbLoginService.fbLogin();
            // facebookConnectPlugin.getLoginStatus(function(success){
            //     $fbStatus = success.status;
            //     if(success.status !== 'connected') {
            //         // If (success.status === 'not_authorized') the user is logged in to Facebook,
            //                 // but has not authenticated your app
            //         // Else the person is not logged into Facebook,
            //                 // so we're not sure if they are logged into this app or not.

            //         console.log('getLoginStatus', success.status);
            //         $ionicLoading.show({
            //             template: 'Logging in...'
            //         });
            //         var permissions = ['public_profile'];//['public_profile', 'user_friends', 'email', 'user_about_me', 'user_likes', 'user_photos', 'user_posts', 'pages_messaging'];
            //         facebookConnectPlugin.login(permissions, fbLoginSuccess, fbLoginError);
            //     } else {
            //         console.log('already connected');
            //     }
            // });
        };   
        
        // var fbLoginSuccess = function (response) {
        //     console.log('the response was ' + response);
        //     var authResponse = response.authResponse;
        //     getFacebookProfileInfo(authResponse).then(function(profileInfo) {
        //         console.log(profileInfo);
        //         // For the purpose of this example I will store user data on local storage
        //         FbLoginService.setUser({
        //             authResponse: authResponse,
        //             userID: profileInfo.id,
        //             name: profileInfo.name,
        //             email: profileInfo.email,
        //             picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
        //         });
        //         $ionicLoading.hide();
        //     }, function(fail){
        //         // Fail get profile info
        //         console.log('profile info fail', fail);
        //     });
        // };

        // var fbLoginError = function (error) {
        //     console.log('fbLoginError', error);
        //     $ionicLoading.hide();
        // };
        
        
        
        
        
        // window.fbAsyncInit = function() {
        //     FB.init({
        //         appId      : '1057203841045531',
        //         cookie     : true,  // enable cookies to allow the server to access the session
        //         xfbml      : true,  // parse social plugins on this page
        //         version    : 'v2.8' // use graph api version 2.8
        //     });

        //     FB.getLoginStatus(function(response) {
        //         // statusChangeCallback(response);
        //     });
        //     FB.XFBML.parse(document.getElementById('fb-login-button'));
        // };

        // // Load the SDK asynchronously
        // (function(d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) return;
        //     js = d.createElement(s); js.id = id;
        //     js.src = "//connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
        
    };
})();