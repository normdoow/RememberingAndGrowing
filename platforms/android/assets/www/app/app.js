// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
'use strict';
//include modules here
var app = angular.module('template',
                          ['ionic', 
                            'ngMaterial',
                            'ngCordovaOauth']);

(function () {

  app
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'app/menu/menu.html',
      controller: 'MenuCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'app/login/login.html',
          controller: 'loginCtrl'
        }
      }
    })
    .state('app.listView', {
      url: '/listView',
      views: {
        'menuContent': {
          templateUrl: 'app/listView/listView.html',
          controller: 'ListViewCtrl'
        }
      }
    })

    .state('app.day', {
      url: '/day/:dayId',
      views: {
        'menuContent': {
          templateUrl: 'app/day/day.html',
          controller: 'DayCtrl'
        }
      }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
    //$locationProvider.html5Mode(true);
  });
})();

//sets the inapp browser on device ready
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;

    cordova.plugins.notification.local.hasPermission(function (granted) {
      console.log("the value of granted is " + granted);
      if(granted) {
          setNotificationForNext30Days();
      } else {
        cordova.plugins.notification.local.registerPermission(function (granted) {
          if(granted) {
            setNotificationForNext30Days();
          }
        });
      }
    });
}

function setNotificationForNext30Days() {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth();
  var date = today.getDate();

  for(var i = 0; i < 40; i++){
        var day = new Date(year, month, date + i);
        day.setHours(9);
        if(day.getDay() != 0 && day.getDay() != 6) {
          // cancelNotification(i);
          scheduleNotification(day, i);
          console.log("the day is" + day);
        }
  }
}

function scheduleNotification(date, id) {
  //cancel the notification if it exists first
  // cordova.plugins.notification.local.cancel(id, function () {
    //create the new notification
    var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';
    console.log("the date is!!!!" + date);

    cordova.plugins.notification.local.schedule({
        id: id,
        title: "Remember and Growing",
        message: "Don't forget to read the next devotion and do your Bible reading!",
        at: date,
        sound: null,
        icon: "app/img/logo.png",
        smallIcon:"/img/logo.png"
    });
  // }, scope);
}