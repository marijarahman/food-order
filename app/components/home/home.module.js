( function (angular) {
	'use strict';

	angular.module('home', [])
		.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: "components/home/home.html",
				controller: 'HomeController'
			});
	}]);
} (angular));
