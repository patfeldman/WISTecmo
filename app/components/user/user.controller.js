(function () {
	'use strict';

	angular
        .module('app')
        .controller('UserController', UserController);

	UserController.$inject = ['$scope', '$state', 'UserService', 'AuthenticationService'];
	function UserController($scope, $state, UserService, AuthenticationService) {
		var vm = this;
		vm.title = $state.$current.title;
		vm.description = $state.$current.desc;

		vm.submitButtonClick = OnSubmitButtonClick;

		function OnSubmitButtonClick() {
			UserService.GetAll().then(function (response) {
				if (response.data) {
					vm.users = response.data;
					var userName = $("#UserNameInput").val();
					var success = false;
					var userNameList = "";
					var comma = "";
					$.each(vm.users, function (i, user) {
						userNameList += comma + user.Name;
						comma = ", ";
						if (user.Name == userName) {
							// SUCCESS
							AuthenticationService.SetCredentials(user.Id, user.Name, user.teamId);
							$state.go('summary');
							success = true;
							return;
						}
					});
					// ERROR
					if (success == false) {
						$(".errorMessage").text("Oops! The user name you entered was no good. Maybe give one of these User Names a try; " + userNameList).show();
					}
				} else {
					// ERROR
					$(".errorMessage").text("Oops! I'm having trouble getting a response from the API. Try again?").show();
				}
			})
		}
	}
})();