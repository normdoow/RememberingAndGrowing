// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
'use stric';
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
      controller: 'AppCtrl'
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