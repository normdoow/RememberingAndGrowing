'use strict';
(function () {
    app
    .service('FbLoginService', FbLoginService);

    FbLoginService.$inject = ['$http', '$cordovaOauth'];
    function FbLoginService($http, $cordovaOauth) {
        
        var accessToken = null;
        var longLivedAccessToken = null;

        // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
        var setUser = function(user_data) {
            window.localStorage.starter_facebook_user = JSON.stringify(user_data);
        };

        var getUser = function(){
            return JSON.parse(window.localStorage.starter_facebook_user || '{}');
        };

        var fbLogin = function () {
            var scope = ['public_profile', 'user_friends', 'email', 'user_about_me', 'user_likes', 'user_photos', 'user_posts', 'pages_messaging'];
            $cordovaOauth.facebook("1057203841045531", scope).then(function(result) {
                console.log(result);
                accessToken = result.access_token;
                getFbLongLivedToken();
            }, function(error) {
                console.log("Error -> " + error);
            });
        }

        var getFbLongLivedToken = function () {
            var params = {grant_type: 'fb_exchange_token' , client_id : '1057203841045531', client_secret: '66870f8c378d93a1718fc30acfc65014', fb_exchange_token : accessToken};
            $http.get('https://graph.facebook.com/v2.8/oauth/access_token', params).then(function success(response) {
                longLivedAccessToken = result.access_token;
                console.log(response);
            },
            function failure(response){
                console.log("http failed some how");
            });
        }

        var getUserData = function () {
            var params = {access_token: accessToken};
            $http.get('https://www.graph.facebook.com/v2.8/me', params).then(function success(response) {
                console.log(response);
            },
            function failure(response){
                console.log("http failed some how");
            });
        }

        return {
            getUser: getUser,
            setUser: setUser,
            fbLogin: fbLogin
        };
    }
})();