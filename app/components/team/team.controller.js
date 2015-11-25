(function () {
    'use strict';

    angular
        .module('app')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope', '$state', '$stateParams', 'TeamService'];
    function TeamController($scope, $state, $stateParams, TeamService) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.description = $state.$current.desc;
        vm.playerId = parseInt($stateParams.playerId);


        vm.playerInfo = GetPlayer(vm.playerId);

        vm.getPositionName = Constants.GetPositionName;
        vm.getPlayerName = Constants.GetPlayerName;
        vm.getSearchStatus = Constants.GetPlayerStatus;
        vm.getPositionRating = null;
        vm.getRatingName = null;

        return;


        function GetTeam(playerId) {
            // ACTUAL RETURN JSON OBJECT
            PlayerService.GetTeamInfo(playerId)
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