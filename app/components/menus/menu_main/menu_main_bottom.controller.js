
(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuMainBottomController', MenuMainBottomController);

    MenuMainBottomController.$inject = ['$state'];
    function MenuMainBottomController( $state) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.pages = [
            { title: "Summary", state: 'summary' },
            { title: "Search", state: 'search' },
            { title: "Signings", state: 'signings' }
        ];

        vm.stateChange = stateChange;
        vm.isSelected = isSelected;

        function stateChange(newState) {
            $state.go(newState);
        }
        function isSelected(stateName) {
            return $state.$current.name === stateName;
        }

    }

})();