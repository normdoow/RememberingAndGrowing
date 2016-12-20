'use strict';
(function () {
    app
    .service('FbLoginService', FbLoginService);

    FbLoginService.$inject = ['$http', '$cordovaOauth'];
    function FbLoginService($http, $cordovaOauth) {
        //variables
        // var accessToken = null;
        // var size = null;

        // //functions
        // function fbLogin (sizeVal) {
        //     size = sizeVal;
        //     //check if using browser or phone
        //     var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
        //     if (app) {
        //         var scope = ['public_profile', 'user_friends', 'email', 'user_about_me', 'user_likes', 'user_photos', 'user_posts', 'pages_messaging'];
        //         return $cordovaOauth.facebook("1057203841045531", scope).then(function(result) {
        //             console.log(result);
        //             accessToken = result.access_token;
        //             console.log(accessToken);
        //         }, function(error) {
        //             console.log("Error -> " + error);
        //         });
        //     } else {
        //         accessToken = 'EAACEdEose0cBAK5PjhIZB5Tddnqapk9BBywVWur6HUEkg5ipwU3pvIBiYY011ZCZAORYPYTZA3C25cqS9SnUUiYaog7PY9sR3yCxh4VqqbZAW2ren6llKT3gvaqr5zxefjls0GEw9rkt8oKCbG7pG0W4dph4ha0XEumvRMxzL5gZDZD';
        //     }
        // }

        // function saveUserDataInDatabase () {
        //     var params = {access_token: accessToken};
        //     $http.get("https://graph.facebook.com/v2.8/me?fields=id,email,first_name,last_name,gender,age_range", 
        //                                             {params: params}).then(function success(response) {
        //         console.log(response);
        //         var data = response.data;
        //         upateDatabaseWithData(data.id, data.first_name, data.last_name
        //                                         , data.age_range.min, size, data.gender, data.email);
        //     },
        //     function failure(response){
        //         console.log("http failed some how");
        //     });
        // }

        // function upateDatabaseWithData (fbId, firstName, lastName, age, size, gender, email) {
        //     // $http.get('http://localhost:1200/pullTable.php').then(function success(response) {
        //     //     var accountObjects = response.data.records;
        //     //     for(var k = 0; k < accountObjects; k++) {
        //     //         userIds[k] = accountObjects[k].ID;
        //     //     }
        //     //     console.log(response.data.records);
        //     //     waitForElement();       //make the FB call
        //     // },
        //     // function failure(response){
        //     //     alert("Failed to load images");
        //     // });
        // }

        // //return values
        // return {
        //     saveUserDataInDatabase: saveUserDataInDatabase,
        //     fbLogin: fbLogin
        // };
    }
})();