(function () {
    'use strict';

    angular
        .module('app')
        .controller('ScheduleController', ScheduleController);

    ScheduleController.$inject = ['$scope', '$state', 'TeamService'];
    function ScheduleController($scope, $state, TeamService) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.description = $state.$current.desc;


        vm.options = GetSelectionOptions();
        $scope.data = {};
        $scope.data.filters = [1,  1, 1];

        SubmitNewSearch();

        vm.getPositionName = Constants.GetPositionName;
        vm.getPlayerName = Constants.GetPlayerName;
        vm.getSearchStatus = Constants.GetPlayerStatus;
        vm.getSpecificSelectionOptions = GetSpecificOptions;
        vm.getDataModel = GetDataModel;
        vm.selectChange = OnSelectChange;
        vm.updateSearch = SubmitNewSearch;

        return; 


        function SubmitNewSearch() {
            var positionVal = $scope.data.filters[0];
            //var divisionVal = $scope.data.filters[1];
            //var ratingsVal = $scope.data.filters[2];
            var distanceVal = $scope.data.filters[3];
            var workEthicVal = $scope.data.filters[4];

            GetPlayerSearch(positionVal, distanceVal, workEthicVal);
        }
        function GetPlayerSearch(positionVal, distanceVal, workEthicVal) {
            // ACTUAL RETURN JSON OBJECT
            var distanceMax = 1000;
            switch (distanceVal) {
                case 1:
                    distanceMax = 50;
                    break;
                case 2:
                    distanceMax = 100;
                    break;
                case 3:
                    distanceMax = 200;
                    break;
                case 4:
                    distanceMax = 400;
                    break;
                case 5:
                    distanceMax = 1000;
                    break;
            }

            var workEthicMin = 10;
            switch (workEthicVal) {
                case 1:
                    workEthicMin = 10;
                    break;
                case 2:
                    workEthicMin = 20;
                    break;
                case 3:
                    workEthicMin = 40;
                    break;
                case 4:
                    workEthicMin = 60;
                    break;
                case 5:
                    workEthicMin = 80;
                    break;
            }
            var searchCriteria = { pos: positionVal, dist: distanceVal, we: workEthicVal };

            PlayerService.PerformPlayerSearch(searchCriteria)
                .then(function (response) {
                    if (response.success) {
                        vm.players = response.data.data;
                    } else {
                        FlashService.Error(response.message);
                    }
                })
        }


        function GetDataModel(title) {
            switch (title) {
                case 'Position':
                    return $scope.data.Position;
            }
            return $scope.data.Division;
            //return vm.data[title];
        }

        function GetSelectionOptions() {
            return [
                { title: 'Position', object: Constants.PositionTypes },
                //{ title: 'Division', object: Constants.DivisionNames },
                //{ title: 'Rating', object: Constants.RatingTypes},
                { title: 'Distance', object: Constants.MaxDistanceOptions },
                { title: 'Work Ethic', object: Constants.WorkEthicOptions }
            ];
        }
        function GetSpecificOptions(title, object) {
            if (title === 'Rating') {
                var val = parseInt($scope.data.filters[0]);
                return object[val].options;
            } else {
                return object;
            }
        }
        function OnSelectChange(title) {
            if (title === 'Position') {
                //var val = parseInt($scope.data.filters[0]);
                //vm.options['Rating'] = Constants.RatingTypes[val].options;
                //$scope.data.filters[2] = 0;
            }
        }

    }


})();