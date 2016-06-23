/**
 * Created by peace on 12/6/16.
 */
define(['angular', 'angular-material', 'angular-cookies'], function (angular) {
  'use strict';

  var accountModule = angular.module('liberry.accountModule', ['ngMaterial', 'ngCookies']);

  accountModule.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
      function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');

        // For any unmatched url, redirect to /login
        $urlRouterProvider.otherwise('/login');

        // .state('home', {
        //     url: '/home',
        //     templateUrl: 'views/login.html',
        //     authenticate: true,
        //     controller: function($scope, $http, AuthService) {
        //         if(!AuthService.isAuthenticated()) {
        //             $state.go('login');
        //         }
        //         var successCallback = function(response) {
        //             $scope.apps = response.data;
        //         }
        //         var errorCallback = function(response) {
        //             $scope.error = 'Could not fetch the list of apps';
        //         }
        //         $http.get('/api/apps').then(successCallback, errorCallback);
        //     }
        // })
      }]
  );

  accountModule.run(['$rootScope', '$state', 'AuthService',
      function ($rootScope, $state, AuthService) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
          if (toState.authenticate && !AuthService.isAuthenticated()) {
            // User isn’t authenticated
            $rootScope.returnToState = toState.url;
            $state.transitionTo('login');
            event.preventDefault();
          }
        });
      }
    ]
  );

  return accountModule;
});
