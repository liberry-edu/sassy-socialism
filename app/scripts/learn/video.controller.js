define(["./learn.module"], function () {

  'use strict';

  angular.module('liberry.learnModule')
    .controller('learn.VideoCtrl', ["$scope", "$sce", function ($scope, $sce) {
            this.config = {
                preload: "none",
                sources: [
                    {src: $sce.trustAsResourceUrl($scope.r_url), type: "video/mp4"},
                ],
                theme: {
                    url: "styles/videogular.css"
                }
            };
        }
    ]);
});