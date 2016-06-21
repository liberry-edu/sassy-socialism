define([
  'angular',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-material',
  'angular-aria',
  'angular-ui-router',
  'angular-messages',
  'angular-local-storage',
  'learn',
  'community',
  'account',
], function (angular) {
  'use strict';

  // Declare app level module which depends on filters, and services
  return angular.module('liberry.mainModule', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngSanitize',
    'LocalStorageModule',
    'ngAria',
    'ngAnimate',
    'liberry.accountModule',
    'liberry.learnModule',
    'liberry.communityModule'
  ]);
});
