(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuMainTopController', MenuMainTopController);

    MenuMainTopController.$inject = ['$state', 'PlayerService'];
    function MenuMainTopController($state, PlayerService) {
    	var vm = this;
    	vm.title = $state.$current.title;
    	vm.description = $state.$current.desc;

    	vm.header = GetHeaderSearch();

    	function GetHeaderSearch() {
    		// ACTUAL RETURN JSON OBJECT
    		PlayerService.GetHeaderInfo()
                .then(function (response) {
                	console.log(response);
                	if (response.success) {
                		vm.header = response.data.data;
                	} else {
                		FlashService.Error(response.message);
                	}
                })
    	}
    }

    


})();