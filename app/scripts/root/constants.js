define(["./main.module"], function () {
  'use strict';

  // initializing form search module
  var mainModule = angular.module("liberry.mainModule");

  mainModule.constant("status", {
    "SUCCESS": 1,
    "ERROR": 2,
    "PENDING": 3,
    "CREATED": 4,
    "EMPTY": 5
  });
});
