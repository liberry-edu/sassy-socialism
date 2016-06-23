/**
 * Created by peace on 12/6/16.
 */
define(['./learn.module'], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name yapp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */
  angular.module('liberry.learnModule')
    .controller('learn.LearnCtrl', ['$scope', '$http', function ($scope, $http) {
      $http({
        method: 'GET', url: 'http://52.77.111.177:8080/api/categories'
      }).then(function (res) {
        $scope.topBucket = res.data;
      });
    }]
  );
});
