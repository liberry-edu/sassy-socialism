/**
 * Created by peace on 12/6/16.
 */
define(["./account.module"], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name yapp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */

  angular.module('liberry.accountModule')
  .factory("AuthService", function(localStorageService) {
    var authService = {
        authenticate: function(username) {
            localStorageService.set('username', username);
            localStorageService.set('password', 'password');
        },
        isAuthenticated: function() {
            return localStorageService.get('username') !== null;
        },
        getAuthentication: function() {
            var payload = {
              username: localStorageService.get('username')
            };
            return payload;
        }
    };
    return authService;
    });

  angular.module('liberry.accountModule')
  .factory('httpRequestInterceptor', function (AuthService) {
    return {
      request: function (config) {
        if(AuthService.isAuthenticated()) {
            var authentication = AuthService.getAuthentication();
            var token = window.btoa(authentication.username + ':' + authentication.password);
          config.headers.Authorization = 'Basic ' + token;
        }
        return config;
      }
    };
  });

  angular.module('liberry.accountModule')
  .controller('account.LoginCtrl', ["$scope", "$location", "$http", "AuthService",
      function ($scope, $location, $http, AuthService) {
        // if(AuthService.isAuthenticated()) {
        //     $location.path('/main/learn');
        // }
        $scope.authenticate = function() {
            var payload = {
                username: $scope.username,
                password: 'password'
            };
            var successCallback = function(response) {
                if(response) {
                    console.log($scope.username);
                    AuthService.authenticate($scope.username, 'password');
                  console.log(AuthService.getAuthentication().username);
                    $location.path('/main/learn');
                }
                else {
                    $scope.error = "Invalid username and/or password";
                }
            };
            var errorCallback = function(response) {
                $scope.error = response.message;
            };
            $http.post('http://52.77.111.177:8080/api/isValidUser', payload).then(successCallback, errorCallback);
        };
        return false;
        }
    ]);

  angular.module('liberry.accountModule')
    .controller('account.LogoutCtrl', ['$location', function ($location) {
        //TODO FORGET AUTHENTICATION HEADERS ON CLIENT SIDE
        $location.path('/login');
      }
  ]);

  angular.module('liberry.accountModule')
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise("/login");

    // .state('home', {
    //     url: "/home",
    //     templateUrl: "views/login.html",
    //     authenticate: true,
    //     controller: function($scope, $http, AuthService) {
    //         if(!AuthService.isAuthenticated()) {
    //             $state.go('login');
    //         }
    //         var successCallback = function(response) {
    //             $scope.apps = response.data;
    //         }
    //         var errorCallback = function(response) {
    //             $scope.error = "Could not fetch the list of apps";
    //         }
    //         $http.get('/api/apps').then(successCallback, errorCallback);
    //     }
    // })
  });

  angular.module('liberry.accountModule')
  .run(function ($rootScope, $state, AuthService) {
      $rootScope.$on("$stateChangeStart", function (event, toState) {
      if (toState.authenticate && !AuthService.isAuthenticated()){
        // User isn’t authenticated
        $rootScope.returnToState = toState.url;
        $state.transitionTo("login");
        event.preventDefault();
      }
    });
  });

});
