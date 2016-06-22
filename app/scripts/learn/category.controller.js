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
    .controller('learn.CategoryCtrl', ["$scope", "$stateParams","$http", function ($scope, $stateParams, $http) {
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

      $scope.content =
  {
    "id": 1,
    "name": "Soil Testing",
    "description": null,
    "image": null,
    "status": "active",
    "category_id": 1,
    "parent_id": null,
    "default_playlist_id": null,
    "created_at": "2016-06-19T18:45:53.000Z",
    "updated_at": "2016-06-19T18:45:53.000Z",
    "media_consumed": 0,
    "media_total": 0
  }


      $http({method: 'GET', url: 'http://52.77.111.177:8080/api/modules?filters={"parent_id":null, "category_id": ' + $stateParams.categoryId + '}', headers: {
          'Authorization': 'Basic cHM6cGFzc3dvcmQ='
        }
      }).then(function(res){
         console.log(res.data);
         $scope.topBucket = res.data;
      }, function(er){
        console.log(er);
      });
      // for (var i = 0; i < $scope.contents.length; i++) {
      //   if ($stateParams.contentId === $scope.contents[i].key) {
      //     $scope.content = $scope.contents[i];
      //   }
      // }
      //console.log($scope.content);
      console.log($stateParams);

    }]);
});
