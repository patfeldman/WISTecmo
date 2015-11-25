(function () {
    'use strict';

    angular
        .module('app')
        .controller('TeamsController', TeamsController);

    TeamsController.$inject = ['$scope', '$state', '$stateParams', 'TeamService'];
    function TeamsController($scope, $state, $stateParams, TeamService) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.description = $state.$current.desc;

        vm.playerInfo = GetTeam();

        vm.getPositionName = Constants.GetPositionName;
        vm.getPlayerName = Constants.GetPlayerName;
        vm.getSearchStatus = Constants.GetPlayerStatus;
        vm.getPositionRating = null;
        vm.getRatingName = null;

        return;


        function GetTeam() {
            // ACTUAL RETURN JSON OBJECT
            TeamService.GetAllTeamInfo()
                .then(function (response) {
                    if (response.success) {
                        vm.playerInfo = response.data.data[0];
                    } else {
                        //FlashService.Error(response.message);
                    }
                })
        }


    }


})();