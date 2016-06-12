define(['./main.module'],
  function () {
    'use strict';

    var states = [
      {
        name: 'base',
        state: {
          abstract: true,
          url: '',
          templateUrl: 'views/base.html',
          data: {
            text: 'Base',
            visible: false
          }
        }
      },
      {
        name: 'login',
        state: {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'account.LoginCtrl',
          data: {text: 'Login', visible: false}
        }
      },
      {
        name: 'main',
        state: {
          url: '/main',
          parent: 'base',
          templateUrl: 'views/main.html',
          controller: 'main.MainCtrl',
          data: {text: 'Main', visible: false}
        }
      },
      {
        name: 'learn',
        state: {
          url: '/learn',
          parent: 'main',
          templateUrl: 'views/main/learn.html',
          controller: 'learn.LearnCtrl',
          data: {text: 'Learn', visible: true}
        }
      },
      {
        name: 'learn.category',
        state: {
          url: '/learn/:categoryId',
          parent: 'main',
          templateUrl: 'views/main/category.html',
          controller: 'learn.CategoryCtrl',
          data: {text: 'Learn category', visible: false}
        }
      },
      {
        name: 'wiki',
        state: {
          url: '/wiki',
          parent: 'main',
          templateUrl: 'views/main/wiki.html',
          data: {text: 'Search Wiki', visible: true}
        }
      },
      {
        name: 'community',
        state: {
          url: '/community',
          parent: 'main',
          templateUrl: 'views/main/community.html',
          data: {text: 'Community', visible: true}
        }
      },
      {
        name: 'Download Apps',
        state: {
          url: '/apps',
          parent: 'main',
          templateUrl: 'views/main/apps.html',
          data: {text: 'Download Apps', visible: true}
        }
      },
      // { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: 'Reports', visible: true } } },
      {
        name: 'logout',
        state: {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'account.LoginCtrl',
          data: {text: 'Logout', visible: true}
        }
      }
    ];

    // Declare app level module which depends on filters, and services
    var mainModule = angular.module('liberry.mainModule');

    mainModule.config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Now set up the states
        //$urlRouterProvider.when('/main', '/main/learn');
        $urlRouterProvider.otherwise('/');

        angular.forEach(states, function (state) {
          $stateProvider.state(state.name, state.state);
        });

        //$locationProvider.html5Mode(true);
      }
    ]);
  }
);
