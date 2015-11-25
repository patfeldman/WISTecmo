(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', '$rootScope'];
    function UserService($http, $rootScope) {
        var service = {};

        service.GetAll = GetAll;
        //service.GetMyLastMoods = GetMyLastMoods;
        //service.GetByUsername = GetByUsername;
        //service.Create = Create;
        //service.Update = Update;
        //service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(Constants.Location.apiLocation + '/api/users').then(handleSuccess, handleError('Error getting all users'));
        }


        // private functions

        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();