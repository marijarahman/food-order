( function (angular) {
	'use strict';

	angular.module('login', [])
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: "components/login/login.html",
					controller: 'LoginController'
				});
		}]);
} (angular));
