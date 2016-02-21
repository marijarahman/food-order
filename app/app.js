'use strict';

// Declare app level module which depends on views, and components
angular.module('food-order', [
        'ui.router',
        'login',
        'home'
    ])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);
