'use strict';
(function () {
    app
    .service('ListViewService', ListViewService);

    ListViewService.$inject = ['$http'];
    function ListViewService($http) {
        
        var jsonData;               //this is the json object that will be used through out the app
        var listViewObject = [];

        loadJSON();

        //loads in a json file with the given path
        function loadJSON() {
            $http.get('app/json/daysWithDevotion.json').success(function(data) {
                jsonData = data;
                console.log(jsonData);
                setListViewObject();
            });
        }

        function setListViewObject() {
            var book = jsonData.book;
            for(var id in book) {
                // console.log(book[id].title);
                var numId = id.replace("id", "");
                listViewObject.push({ title: book[id].title, id: numId, selected: false });
            }
        }

        //returns if a devotion was completed or not
        function isDevotionCompletedWithNum(num) {
            var val = window.localStorage.getItem('id' + num);
            if(val && val !== undefined && val != "false") {
                return true;
            }
            return false;
        }

        function getCurrentDevoNum() {
            for(var k = 0; k < listViewObject.length; k++) {
                if(!isDevotionCompletedWithNum(k + 1)) {
                    return k + 1;
                }
            }
        }

        return {
            serviceVar: "The service Var",
            getListViewObject: function() {
                return listViewObject;
            },
            getCurrentDevoNum: getCurrentDevoNum
        }
    }
})();