'use strict';
(function () {
    app
    .service('InstagramService', InstagramService);

    InstagramService.$inject = ['$http', '$cordovaOauth'];
    function InstagramService($http, $cordovaOauth) {

        // var accessToken = null;

        // function instaLogin() {
        //     var scope = ['basic', 'comments', 'follower_list', 'likes', 'public_content', 'relationships'];
        //     $cordovaOauth.instagram("e9d25fd3360140af82f53115180384e6", scope).then(function(result) {
        //         console.log("access_token -> " + result.access_token);
        //         accessToken = result.access_token;
        //     }, function(error) {
        //         console.log("Error -> " + error);
        //     });
        //     // $http.get('https://www.instagram.com/oauth/authorize/?client_id=e9d25fd3360140af82f53115180384e6&redirect_uri=http://localhost:8100&response_type=token').then(function success(response) {
        //     //     console.log(response);
        //     // },
        //     // function failure(response){
        //     //     console.log("http failed some how");
        //     // });
        // }

        // return {
        //     instaLogin: instaLogin
        // };
    }
})();