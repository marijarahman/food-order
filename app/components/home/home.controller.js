( function (angular) {
	'use strict';

	angular.module('home')
		.controller('HomeController', function ($scope, $uibModal) {
			$scope.open = function () {
				$uibModal.open({
					template: '<h1>Hello!</h1>',
					controller: 'LoginController'
				});
			}
		});
}(angular));
