(function () {
    'use strict';

    angular
        .module('app')
        .factory('RosterService', RosterService);

    RosterService.$inject = ['$http', '$rootScope', '$q'];
    function RosterService($http, $rootScope, $q) {
        var service = {};

        service.PerformRosterSearch = PerformRosterSearch;

        return service;

        function PerformRosterSearch(searchCriteria) {
            // API CALL WHEN READY
            //return $http.get(Constants.Location.apiLocation + 'api/v1/users').then(handleSuccess, handleError('Error getting all users'));

            // perform a test
            var deferred = $q.defer();
            deferred.resolve(getTestRoster());
            return deferred.promise;
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


        // TEST FUNCTION FOR GETTING USER
        function getTestRoster() {
            var retVal = {};
            retVal.data = {};
            retVal.data.success = true;
            retVal.data.object = [
                { pos: "QB", total: "3", collClasses :  [ {name: "Sr", total: "1"}, {name: "Jr", total: "0"}, {name: "So", total: "1"}, {name: "Fr", total: "1"} ]},
                { pos: "RB", total: "100", collClasses: [{ name: "Sr", total: "25" }, { name: "Jr", total: "25" }, { name: "So", total: "25" }, { name: "Fr", total: "25" }] },
                { pos: "WR", total: "100", collClasses: [{ name: "Sr", total: "25" }, { name: "Jr", total: "25" }, { name: "So", total: "25" }, { name: "Fr", total: "25" }] },
                { pos: "OL", total: "100", collClasses: [{ name: "Sr", total: "25" }, { name: "Jr", total: "25" }, { name: "So", total: "25" }, { name: "Fr", total: "25" }] },
                { pos: "DL", total: "100", collClasses :  [ {name: "Sr", total: "25"}, {name: "Jr", total: "25"}, {name: "So", total: "25"}, {name: "Fr", total: "25"} ]},
                { pos: "LB", total: "100", collClasses :  [ {name: "Sr", total: "25"}, {name: "Jr", total: "25"}, {name: "So", total: "25"}, {name: "Fr", total: "25"} ]},
                { pos: "DB", total: "100", collClasses :  [ {name: "Sr", total: "25"}, {name: "Jr", total: "25"}, {name: "So", total: "25"}, {name: "Fr", total: "25"} ]},
                { pos: "K", total: "100", collClasses: [{ name: "Sr", total: "25" }, { name: "Jr", total: "25" }, { name: "So", total: "25" }, { name: "Fr", total: "25" }] },
                { pos: "P", total: "100", collClasses: [{ name: "Sr", total: "25" }, { name: "Jr", total: "25" }, { name: "So", total: "25" }, { name: "Fr", total: "25" }] },
				{ pos: "Total", total: "100", collClasses: [{ name: "Sr", total: "25" }, { name: "Jr", total: "25" }, { name: "So", total: "25" }, { name: "Fr", total: "25" }] },
            ];

            return retVal;
        }
    }

})();