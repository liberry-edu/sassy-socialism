/**
 * Created by peace on 12/6/16.
 */
define(['./learn.module'], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name liberry.learnModule.learn.CategoryCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */
  var learnModule = angular.module('liberry.learnModule');

  learnModule.controller('learn.CategoryCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

   $http({
      method: 'GET',
      url: '/api/modules?filters={"parent_id":null, "category_id": ' + $stateParams.categoryId + '}'
    }).then(function (res) {
      console.log(res.data);
      $scope.topBucket = res.data;
    }, function (er) {
      console.log(er);
    });

  }]);
});
