/**
 * Created by peace on 12/6/16.
 */
define(["./learn.module"], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name liberry.learnModule.learn.CategoryCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */
  angular.module('liberry.learnModule')
    .controller('learn.CategoryCtrl', ["$scope", function ($scope) {
      $scope.category = [
        {
          "key": "1232145",
          "name": "Video: Meet Rahul ",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 3,
          "media_total": 9,
          "category": "video"
        },
        {
          "key": "12321245",
          "name": "Rahul meets Tina",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 2,
          "media_total": 7,
          "category": "doc"
        },
        {
          "key": "1732145",
          "name": "Tina meets Kajal",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 4,
          "media_total": 6,
          "category": "music"
        },
        {
          "key": "632145",
          "name": "Kajal meets Nimit",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 3,
          "media_total": 5,
          "category": "game"
        },
        {
          "key": "92145",
          "name": "Nimit meets Ahilya",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 5,
          "media_total": 5,
          "category": "video"
        },
        {
          "key": "6145",
          "name": "Ahilya meets Suhas",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 7,
          "media_total": 9,
          "category": "video"
        },
        {
          "key": "282145",
          "name": "Sub Category 1",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 2,
          "media_total": 4,
          "type": "category"
        },
        {
          "key": "932145",
          "name": "Sub Category 2",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 5,
          "media_total": 6,
          "type": "category"
        },
        {
          "key": "32",
          "name": "Sub Category 3",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 3,
          "media_total": 3,
          "type": "category"
        },
        {
          "key": "67",
          "name": "Sub Category 4",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 7,
          "media_total": 9,
          "type": "category"
        },
        {
          "key": "121",
          "name": "Sub Category 5",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 3,
          "media_total": 9,
          "type": "category"
        },
        {
          "key": "1235",
          "name": "Sub Category 6",
          "contenturl": "images/bl1.jpg",
          "media_consumed": 3,
          "media_total": 8,
          "type": "category"
        }
      ];
    }]);
});
