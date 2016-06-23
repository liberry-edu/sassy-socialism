/**
 * Created by peace on 23/6/16.
 */
define(['./account.module'], function () {
  'use strict';

  angular.module('liberry.accountModule')
    .factory('AuthService', function (localStorageService) {
      var authService = {
        authenticate: function (username) {
          localStorageService.set('username', username);
          localStorageService.set('password', 'password');
        },
        isAuthenticated: function () {
          return localStorageService.get('username') !== null;
        },
        getAuthentication: function () {
          var payload = {
            username: localStorageService.get('username')
          };
          return payload;
        }
      };
      return authService;
    });
});
