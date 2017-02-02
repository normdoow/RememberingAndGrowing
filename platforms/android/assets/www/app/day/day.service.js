'use strict';
(function () {
    app
    .service('DayService', DayService);

    DayService.$inject = ['$location', '$http'];
    function DayService($location, $http) {

        //holds the jsonObject
        var jsonData = {};
        var text = "";
        var title = "";
        var reading = "";
        var focusWord = "";
        var dayObject = [];
        
        //sets the page for whatever page is moved to
        function setPage(devoNum) {
            if(Object.keys(jsonData).length < 1) {
                $http.get('app/json/daysWithDevotion.json').success(function(data) {
                    jsonData = data;
                    setDayObject(devoNum);
                });
            } else {
                setDayObject(devoNum);
            }
        }

        function setDayObject(devoNum) {
            reading = jsonData.book["id" + devoNum].reading;
            focusWord = jsonData.book["id" + devoNum].focusWord;
            text = jsonData.book["id" + devoNum].text;
            title = jsonData.book["id" + devoNum].title;
            dayObject.length = 0;       //empty it so the latest is in the first spot
            dayObject.push({reading: reading, focusWord: focusWord, text: text, title: title});
        }

        return {
            getDayObject: function() {
                return dayObject;
            },
            setPage: setPage
        }
    }
})();