angular.module('playground.home.directives')

    .directive('directiveTwo', [ function () {
        return{
            restrict: 'EA',
            scope: {
                title: "@title",
                user: "=",
                hobby: "=?hobbyToEdit"
            },
            replace: false,
            templateUrl: 'src/home/directives/directive-two/directiveTwo.html',
            link: function(scope, element, attrs){
                console.log('registered directiveTwo!');

                scope.$watch('hobby', function(newData){
                    console.log('new hobby to edit: ', newData);
                })
            }
        }
    }]);