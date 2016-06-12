define(["./main.module"],
  function () {
    'use strict';

    // Declare app level module which depends on filters, and services
    var mainModule = angular
      .module('liberry.mainModule');

    mainModule.config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {
      $mdIconProvider.fontSet('fa', 'fontawesome');  // Register icon in a specific set
      //$mdThemingProvider.definePalette('customPurple', {
      //  '50': '#d9c5e0',
      //  '100': '#b993c6',
      //  '200': '#a16eb2',
      //  '300': '#7d4b8e',
      //  '400': '#6c417a',
      //  '500': '#5a3666',
      //  '600': '#482b52',
      //  '700': '#37213e',
      //  '800': '#25162a',
      //  '900': '#130c16',
      //  'A100': '#d9c5e0',
      //  'A200': '#b993c6',
      //  'A400': '#6c417a',
      //  'A700': '#37213e',
      //  'contrastDefaultColor': 'light',
      //  'contrastDarkColors': '50 100 200 A100 A200'
      //});
      //
      //$mdThemingProvider.definePalette('customRed', {
      //  '50': '#f5dbe3',
      //  '100': '#e49fb6',
      //  '200': '#d77395',
      //  '300': '#c73c6b',
      //  '400': '#b2335e',
      //  '500': '#9a2c51',
      //  '600': '#822544',
      //  '700': '#6a1e38',
      //  '800': '#53182b',
      //  '900': '#3b111f',
      //  'A100': '#f5dbe3',
      //  'A200': '#e49fb6',
      //  'A400': '#b2335e',
      //  'A700': '#6a1e38',
      //  'contrastDefaultColor': 'light',
      //  'contrastDarkColors': '50 100 200 A100 A200'
      //});

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('indigo');
    }]);
  });
