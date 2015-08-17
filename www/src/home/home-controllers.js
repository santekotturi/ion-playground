angular.module('playground.home.controllers', [])

    .controller('HomeCtrl', ['$scope', 'UserService', function ($scope, UserService) {
        console.log('using home ctrl');
        var home = this;

        home.user = UserService.getUser(); 

        home.message = "some ctrl as working";
    }]);