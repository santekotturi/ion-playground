angular.module('playground.home.controllers', [])

    .controller('HomeCtrl', ['$scope', function ($scope) {
        console.log('using home ctrl');
        var home = this;

        home.message = "some ctrl as working";
    }]);