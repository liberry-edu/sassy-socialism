/**
 * Created by peace on 12/6/16.
 */
define(["./main.module"], function () {

  'use strict';

  /**
   * @ngdoc function
   * @name yapp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of yapp
   */
  angular.module('liberry.mainModule')
    .controller('main.MainCtrl', ['$scope', '$state', '$mdSidenav', function ($scope, $state, $mdSidenav) {
      $scope.$state = $state;
      $scope.sidenavOpen = false;

      $scope.menuItems = [];
      angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
          $scope.menuItems.push({name: item.name, description: item.data.description, text: item.data.text});
        }
      });

      $scope.toggleSideNav = function () {
        $scope.sidenavOpen = !$scope.sidenavOpen;
        $mdSidenav('left').toggle();
      };
    }]
  );
});
