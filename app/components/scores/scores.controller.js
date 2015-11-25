(function () {
    'use strict';

    angular
        .module('app')
        .controller('SigningsController', SigningsController);

    SigningsController.$inject = ['$state', 'PlayerService'];
    function SigningsController($state, PlayerService) {
    	var vm = this;
    	vm.title = $state.$current.title;
    	vm.description = $state.$current.desc;

    	vm.players = GetPlayerSearch();
    	vm.options = GetSelectionOptions();

    	vm.getPositionName = Constants.GetPositionName;
    	vm.getPlayerName = Constants.GetPlayerName;

    	function GetPlayerSearch() {
    		// ACTUAL RETURN JSON OBJECT
    	    PlayerService.PerformPlayerGetSignings()
                .then(function (response) {
                if (response.success) {
                    vm.players = response.data.data;
                } else {
                    FlashService.Error(response.message);
                }
            })


    	    //PlayerService.PerformPlayerSearch().then(function (response) {
			//	if (response.data.success) {
            //    	vm.players = response.data.object;
			//	} else {
            //    	FlashService.Error(response.message);
			//	}
			//})
    	}

    	function GetSelectionOptions() {
    		return [
                { title: 'Position', object: Constants.PositionTypes },
    		];
    	}
    }
})();