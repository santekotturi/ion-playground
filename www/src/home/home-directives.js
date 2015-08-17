angular.module('playground.home.directives', [])

    .directive('directiveOne', [ function () {
        return{
            restrict: 'EA',
            scope: {

            },
            replace: false,
            templateUrl: 'src/home/directive-templates/directiveOne.html',
            link: function(scope, element, attrs){
                console.log('registered directiveOne!');
            }
        }
    }])

    .directive('directiveTwo', [ function () {
        return{
            restrict: 'EA',
            scope: {

            },
            replace: false,
            templateUrl: 'src/home/directive-templates/directiveTwo.html',
            link: function(scope, element, attrs){
                console.log('registered directiveTwo!');
            }
        }
    }]);