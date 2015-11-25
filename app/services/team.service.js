(function () {
    'use strict';

    angular
        .module('app')
        .factory('TeamService', TeamService);

    TeamService.$inject = ['$http', '$rootScope', '$q'];
    function TeamService($http, $rootScope, $q) {
        var service = {};

        service.GetAllTeamInfo = GetAllTeamInfo;
        // service.PerformPlayerSearch = PerformPlayerSearch;
        // service.PerformPlayerGet = PerformPlayerGet;
        // service.GetHeaderInfo = GetHeaderInfo;
        // service.PerformPlayerGetSignings = PerformPlayerGetSignings;

        return service;

        function GetAllTeamInfo() {
            // API CALL WHEN READY
            //var userId = Constants.GetUserId($rootScope);
            var searchUrl = Constants.Location.apiLocation + 'api/competition/1/2015/Teams';
            $http.defaults.headers.common['Authorization'] = 'Basic em1hbG9zaDpwYXNzd29yZA=='; // jshint ignore:line

            return $http.get(searchUrl).then(handleSuccess, handleError('Error getting all users'));
        }


        
        function GetSummary(userId) {
            // API CALL WHEN READY
            //return $http.get(Constants.Location.apiLocation + 'api/v1/users').then(handleSuccess, handleError('Error getting all users'));

            // perform a test
            var deferred = $q.defer();
            deferred.resolve(getTestPlayers());
            return deferred.promise;
        }

        // private functions
        function handleSuccess(data) {
            var retVal = {};
            retVal.success = true;
            retVal.data = data;
            return retVal;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();