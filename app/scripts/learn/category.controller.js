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

    $scope.content = {
      'id': 1,
      'name': 'Soil Testing',
      'description': null,
      'image': null,
      'status': 'active',
      'category_id': 1,
      'parent_id': null,
      'default_playlist_id': null,
      'created_at': '2016-06-19T18:45:53.000Z',
      'updated_at': '2016-06-19T18:45:53.000Z',
      'media_consumed': 0,
      'media_total': 0
    };


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
