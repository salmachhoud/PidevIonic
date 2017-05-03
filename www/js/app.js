// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic',"ngResource",'angularFileUpload'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

$stateProvider 
 .state('user1', {
    url: "/form",
    templateUrl: "js/Task.View.form.html",
    controller: "TaskController"
})
   .state('user2', {
    url: "/upload",
    templateUrl: "examples/image-preview/index.html",
   controller: "AppController"
})
   .state('user3', {
    url: "/edit/:id",
    templateUrl: "js/Task.View.update.html",
    controller: "TaskController"
})  
   .state('user5', {
    url: "/detail/:id",
    templateUrl: "js/Task.View.detail.html",
    controller: "TaskController"
})  

.state('user', {
    url: "/list",
    templateUrl: "js/Task.View.html",
    controller: "TaskController"
})
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/list');

});















