/**
 * Created by peace on 12/6/16.
 */
define(['./learn.module'], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name liberry.learnModule.learn.ContentCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */
  var learnModule = angular.module('liberry.learnModule');
  learnModule.controller('learn.ContentCtrl', ['$scope', '$stateParams', '$http', '$state', function ($scope, $stateParams, $http, $state) {
    function onCreate() {
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
      var contentId = $state.params.contentId;
      var moduleId = $stateParams.moduleId;
      $scope.contents = [];

      $http({
        method: 'GET',
        url: '/api/contents?filters={"module_id":' + moduleId + '}'
      }).then(function (res) {
        $scope.contents = res.data;
        $scope.content = getActiveContent($scope.contents, contentId);

        console.log('CONTENTS: ', $scope.contents);
      }, function (er) {
        console.log(er);
      });

      console.log('CONTENTS: ', $scope.contents);
    }

    function getActiveContent(contentList, contentId) {
      var content = contentList[0];
      for (var i = 0; i < contentList.length; i++) {
        if (contentId === contentList[i].id) {
          content = contentList[i];
        }
      }
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      $state.transitionTo('learn.content', {moduleId: content.module_id, contentId: content.id}, {
        location: 'replace',
        notify: false,
        reload: false
      });
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      return content;
    }

    $scope.changeActiveContent = function (moduleId, contentId) {
      $state.transitionTo('learn.content', {moduleId: moduleId, contentId: contentId}, {notify: false});
      $scope.content = getActiveContent($scope.contents, contentId);
    };

    onCreate();
  }]);
});
