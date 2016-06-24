/**
 * Created by peace on 12/6/16.
 */
define(["./learn.module"], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name liberry.learnModule.learn.ContentCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */
  angular.module('liberry.learnModule')
    .controller('learn.ContentCtrl', ["$scope", "$stateParams","$http", function ($scope, $stateParams, $http) {
      // $scope.contents = [
      //   {
      //     "key": "1232145",
      //     "name": "Video: Meet Rahul ",
      //     "desc": "Interesting Video",
      //     "contenturl": "content/demo.mp4",
      //     "type": "video"
      //   },
      //   {
      //     "key": "12321245",
      //     "name": "Rahul meets Tina",
      //     "contenturl": "images/bl1.jpg",
      //     "type": "doc"
      //   },
      //   {
      //     "key": "1732145",
      //     "name": "Tina meets Kajal",
      //     "contenturl": "images/bl1.jpg",
      //     "type": "audio"
      //   },
      //   {
      //     "key": "632145",
      //     "name": "Kajal meets Nimit",
      //     "contenturl": "images/bl1.jpg",
      //     "type": "game"
      //   },
      //   {
      //     "key": "92145",
      //     "name": "Nimit meets Ahilya",
      //     "contenturl": "content/demo.mp4",
      //     "type": "video"
      //   },
      //   {
      //     "key": "6145",
      //     "name": "Ahilya meets Suhas",
      //     "contenturl": "content/demo.mp4",
      //     "type": "video"
      //   }
      // ];

      $scope.contents=[];
     
    $http({
      method: 'GET',
      url: '/api/contents?filters={"module_id": ' + $stateParams.moduleID + '}'
    }).then(function (res) {
      $scope.contents = res.data;
      console.log("CONTENTS: ",$scope.contents);
    }, function (er) {
      console.log(er);
    });

      //$scope.content = $scope.contents[0];

      // for (var i = 0; i < $scope.contents.length; i++) {
      //   if ($stateParams.contentId === $scope.contents[i].key) {
      //     $scope.content = $scope.contents[i];
      //   }
      // }
      console.log("CONTENTS: ",$scope.contents);

    }]);
});