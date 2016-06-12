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
    .controller('learn.LearnCtrl', ['$scope', function ($scope) {
      $scope.topBucket = [
        {
          'key': '1232145',
          'name': 'Agriculture',
          'image': 'images/bl1.jpg',
          'media_consumed': 3,
          'media_total': 9,
          'type': 'category'
        },
        {
          'key': '12321245',
          'name': 'Health & Hygiene',
          'image': 'images/bl1.jpg',
          'media_consumed': 2,
          'media_total': 7,
          'type': 'category'
        },
        {
          'key': '1732145',
          'name': 'Primary Education',
          'image': 'images/bl1.jpg',
          'media_consumed': 4,
          'media_total': 6,
          'type': 'category'
        },
        {
          'key': '632145',
          'name': 'Secondary Education',
          'image': 'images/bl1.jpg',
          'media_consumed': 3,
          'media_total': 5,
          'type': 'category'
        },
        {
          'key': '92145',
          'name': 'Competitive Exam Preparation',
          'image': 'images/bl1.jpg',
          'media_consumed': 5,
          'media_total': 5,
          'type': 'category'
        },
        {
          'key': '6145',
          'name': 'Govt. Records & Local Governance Info',
          'image': 'images/bl1.jpg',
          'media_consumed': 7,
          'media_total': 9,
          'type': 'category'
        },
        {
          'key': '282145',
          'name': 'Government Scheme Info',
          'image': 'images/bl1.jpg',
          'media_consumed': 2,
          'media_total': 4,
          'type': 'category'
        },
        {
          'key': '932145',
          'name': 'Self Defence',
          'image': 'images/bl1.jpg',
          'media_consumed': 5,
          'media_total': 6,
          'type': 'category'
        },
        {
          'key': '32',
          'name': 'English for Job Skills',
          'image': 'images/bl1.jpg',
          'media_consumed': 3,
          'media_total': 3,
          'type': 'category'
        },
        {
          'key': '67',
          'name': 'Participatory Information by Panchayat',
          'image': 'images/bl1.jpg',
          'media_consumed': 7,
          'media_total': 9,
          'type': 'category'
        },
        {
          'key': '121',
          'name': 'Vocational Education',
          'image': 'images/bl1.jpg',
          'media_consumed': 3,
          'media_total': 9,
          'type': 'category'
        },
        {
          'key': '1235',
          'name': 'Skill training videos',
          'image': 'images/bl1.jpg',
          'media_consumed': 3,
          'media_total': 8,
          'type': 'category'
        }
      ];
    }]);
});
