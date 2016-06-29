define(['./main.module'],
  function () {
    'use strict';

    var states = [
      {
        name: 'login',
        state: {
          url: '/login',
          templateUrl: 'views/login.html',
          authenticate: false,
          controller: 'account.LoginCtrl',
          data: {text: 'Login', description: '', visible: false}
        }
      },
      {
        name: 'main',
        state: {
          url: '/main',
          templateUrl: 'views/main.html',
          authenticate: true,
          controller: 'main.MainCtrl',
          data: {text: 'Main', description: '', visible: false}
        }
      },
      {
        name: 'learn',
        state: {
          url: '/learn',
          parent: 'main',
          templateUrl: 'views/main/learn.html',
          authenticate: true,
          controller: 'learn.LearnCtrl',
          data: {text: 'Learn', description: 'Want to find something interesting?', visible: true}
        }
      },
      {
        name: 'learn.category',
        state: {
          url: '/learn/category/{categoryId:int}',
          parent: 'main',
          templateUrl: 'views/main/category.html',
          authenticate: true,
          controller: 'learn.CategoryCtrl',
          data: {text: 'Learn category', description: '', visible: false}
        }
      },
      {
        name: 'learn.content',
        state: {
          url: '/learn/category/{moduleId:int}/content?{contentId:int}',
          parent: 'main',
          templateUrl: 'views/main/content.html',
          authenticate: true,
          controller: 'learn.ContentCtrl',
          data: {text: 'Module Contents', description: '', visible: false}
        }
      },
      {
        name: 'wiki',
        state: {
          url: '/wiki',
          parent: 'main',
          templateUrl: 'views/main/wiki.html',
          authenticate: true,
          data: {text: 'Search Wiki', description: 'Got a question in head?', visible: true}
        }
      },
      {
        name: 'community',
        state: {
          url: '/community',
          parent: 'main',
          templateUrl: 'views/main/community.html',
          authenticate: true,
          data: {text: 'Community', description: 'Connect with other people', visible: true}
        }
      },
      {
        name: 'downloadApps',
        state: {
          url: '/apps',
          parent: 'main',
          templateUrl: 'views/main/apps.html',
          authenticate: true,
          data: {text: 'Download Apps', description: 'Search through millions of apps', visible: true}
        }
      },
      // { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: 'Reports', visible: true } } },
      {
        name: 'logout',
        state: {
          url: '/login',
          templateUrl: 'views/login.html',
          authenticate: true,
          controller: 'account.LogoutCtrl',
          data: {text: 'Logout', description: '', visible: true}
        }
      }
    ];

    // Declare app level module which depends on filters, and services
    var mainModule = angular.module('liberry.mainModule');

    mainModule.config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      function ($stateProvider) {
        // Now set up the states
        // $urlRouterProvider.when('/main', '/main/learn');
        // $urlRouterProvider.otherwise('/login');

        angular.forEach(states, function (state) {
          $stateProvider.state(state.name, state.state);
        });

        //$locationProvider.html5Mode(true);
      }
    ]);
  }
);
