( function (angular) {
	'use strict';

	angular.module('login', ['ui.bootstrap'])
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: "components/login/login.html",
					controller: 'LoginController'
				});
		}]);
} (angular));
