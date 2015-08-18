angular.module('playground.home.directives')

    .directive('hobbieInput', [ 'UserService', function (UserService) {
        return {
            restrict: 'EA',
            scope: {
                title: "@title",
                user: "=",
                hobby: "=?hobby"
            },
            replace: false,
            templateUrl: 'src/home/directives/directive-two/directiveTwo.html',
            link: function (scope, element, attrs) {
                console.log('registered directiveTwo!');

                scope.user = UserService.getUser();

                scope.$watch('hobby', function (newData) {
                    console.log('new hobby to edit: ', newData);
                });

                scope.remove = function (hobby, index) {

                };

                scope.saveNew = function () {
                    scope.user.hobbies.push(scope.hobby);
                };

                scope.updateChanges = function () {

                };

                scope.clearValues = function () {
                    console.log('clearing values;')
                    scope.hobby.name = '';
                    scope.hobby.commitmentLevel = '';
                    scope.hobby.weeklyTime = null;  //hrs
                    scope.hobby.doucheScore = ''
                };
            }
        }
    }]);