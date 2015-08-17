angular.module('playground.home.directives')

    .directive('directiveOne', [ function () {
        return{
            restrict: 'EA',
            scope: {
                title: "@title",
                user: "=",
                hobbyToEdit: "=?"
            },
            replace: false,
            templateUrl: 'src/home/directives/directive-one/directiveOne.html',
            link: function(scope, element, attrs){
                console.log('registered directiveOne!');

                scope.shouldShowDelete = false;
                scope.shouldShowReorder = false;
                scope.listCanSwipe = true;

                scope.edit = function(hobby, index){
                    console.log('send hobby off to editing: ', hobby);
                    scope.hobbyToEdit = hobby;
                };

                scope.remove = function (hobby, index) {

                };


            }
        }
    }]);