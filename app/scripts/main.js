/*jshint unused: vars */
(function (requirejs) {
  'use strict';

  requirejs.config({
    paths: {
      angular: '../../bower_components/angular/angular',
      'angular-animate': '../../bower_components/angular-animate/angular-animate',
      'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
      'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
      'angular-resource': '../../bower_components/angular-resource/angular-resource',
      'angular-route': '../../bower_components/angular-route/angular-route',
      'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
      'angular-aria': '../../bower_components/angular-aria/angular-aria',
      'angular-material': '../../bower_components/angular-material/angular-material',
      'angular-messages': '../../bower_components/angular-messages/angular-messages',
      'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
      'angular-touch': '../../bower_components/angular-touch/angular-touch'
    },
    shim: {
      angular: {
        exports: 'angular'
      },
      'angular-route': [
        'angular'
      ],
      'angular-cookies': [
        'angular'
      ],
      'angular-sanitize': [
        'angular'
      ],
      'angular-resource': [
        'angular'
      ],
      'angular-animate': [
        'angular'
      ],
      'angular-aria': [
        'angular'
      ],
      'angular-material': [
        'angular'
      ],
      'angular-ui-router': [
        'angular'
      ],
      'angular-messages': [
        'angular'
      ],
      'angular-mocks': {
        deps: [
          'angular'
        ],
        exports: 'angular.mock'
      }
    },
    priority: [
      'angular'
    ],
    packages: [
      'root',
      'learn',
      'community',
      'account'
    ],
    waitSeconds: 0
  });

  requirejs.onError = function (err) {
    console.log(err);
  };

  requirejs([
    'angular',
    'angular-ui-router',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource',
    'angular-animate',
    'angular-material',
    'angular-aria',
    'root'
  ], function (angular) {
    angular.bootstrap(document, ['liberry.mainModule']);
  });
})(require);
