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
    .controller('account.LoginCtrl', ['$scope', '$location',
      function ($scope, $location) {
        $scope.submit = function () {
          $location.path('/main/learn');
          return false;
        };
      }
    ]);
});
