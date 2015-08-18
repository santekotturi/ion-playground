angular.module('playground.services')

    .service('UserService', [function () {
        var user = {
                name: 'Joe Smo',
                occupation: 'Bro',
                hobbies: [
                    {
                        name: 'beer drinking',
                        commitmentLevel: 'high',
                        weeklyTime: 15,  //hrs
                        doucheScore: 'low'
                    },
                    {
                        name: 'video gaming',
                        commitmentLevel: 'medium',
                        weeklyTime: 10,  //hrs
                        doucheScore: 'medium'
                    },
                    {
                        name: 'cat calling women',
                        commitmentLevel: 'high',
                        weeklyTime: 5,  //hrs
                        doucheScore: 'high'
                    }
                ]
            };

        return {
            getUser: function(){
                return user;
            }
        }
    }]);