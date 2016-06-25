/**
 * Created by peace on 12/6/16.
 */
define(['./account.module'], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name yapp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */

  angular.module('liberry.accountModule')
    .factory('httpRequestInterceptor', function (AuthService) {
      return {
        request: function (config) {
          if (AuthService.isAuthenticated()) {
            var authentication = AuthService.getAuthentication();
            var token = (window.btoa(authentication.username + ':' + 'password'/*authentication.password*/)).toString('base64');
            config.headers.Authorization = 'Basic ' + token;
           }
          return config;
        }
      };
    });

  angular.module('liberry.accountModule')
    .controller('account.LoginCtrl', ['$scope', '$location', '$http', 'AuthService',
      function ($scope, $location, $http, AuthService) {
        // if(AuthService.isAuthenticated()) {
        //     $location.path('/main/learn');
        // }

        $scope.authenticate = function () {
          console.log($scope.username);
          if ($scope.username == null || $scope.username == "") {
            alert("Please enter your username.");
            return false;
          }

          var payload = {
            username: $scope.username.replace(/ /g,''),
            password: 'password',
          };

          var successCallback = function (response) {
              console.log(response);
            if (response && response.data) {
              AuthService.authenticate($scope.username.replace(/ /g,''), 'password');
              console.log(AuthService.getAuthentication().username);
              $location.path('/main/learn');
            }
            else {
              // register the user
              // invariant all users would have password as 'password'
              
              var successCallbackRegister = function(responseRegister) {
                  console.log(responseRegister);
                  console.log("success");
                  AuthService.authenticate($scope.username.replace(/ /g,''), 'password');
                  $location.path('/main/learn');
              }

              var errorCallbackRegister = function(responseRegister) {
                  console.log(responseRegister);
                  console.log("error");
                  $scope.error = responseRegister.message;
              }
              
              var payloadRegister = {
                      username: $scope.username.replace(/ /g,''),
                      password: 'password',
                      name: $scope.username.replace(/ /g,''),
                      email: $scope.username.replace(/ /g,'')+"@liberry.in"
              }

              $http.post('/api/register', payloadRegister).then(successCallbackRegister, errorCallbackRegister);

              $scope.error = 'Invalid username and/or password';
            }
          };
          var errorCallback = function (response) {
            $scope.error = response.message;
          };
          $http.post('/api/isValidUser', payload).then(successCallback, errorCallback);
        };
        return false;
      }
    ]);

  angular.module('liberry.accountModule')
    .controller('account.LogoutCtrl', ['$location', function ($location) {
      //TODO FORGET AUTHENTICATION HEADERS ON CLIENT SIDE
      $location.path('/login');
    }]
  );

  //angular.module('liberry.accountModule')
  //  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  //
  //    $httpProvider.interceptors.push('httpRequestInterceptor');
  //
  //    // For any unmatched url, redirect to /login
  //    $urlRouterProvider.otherwise('/login');
  //
  //    // .state('home', {
  //    //     url: '/home',
  //    //     templateUrl: 'views/login.html',
  //    //     authenticate: true,
  //    //     controller: function($scope, $http, AuthService) {
  //    //         if(!AuthService.isAuthenticated()) {
  //    //             $state.go('login');
  //    //         }
  //    //         var successCallback = function(response) {
  //    //             $scope.apps = response.data;
  //    //         }
  //    //         var errorCallback = function(response) {
  //    //             $scope.error = 'Could not fetch the list of apps';
  //    //         }
  //    //         $http.get('/api/apps').then(successCallback, errorCallback);
  //    //     }
  //    // })
  //  });

  //angular.module('liberry.accountModule')
  //  .run(function ($rootScope, $state, AuthService) {
  //    $rootScope.$on('$stateChangeStart', function (event, toState) {
  //      if (toState.authenticate && !AuthService.isAuthenticated()) {
  //        // User isn’t authenticated
  //        $rootScope.returnToState = toState.url;
  //        $state.transitionTo('login');
  //        event.preventDefault();
  //      }
  //    });
  //  });

});
