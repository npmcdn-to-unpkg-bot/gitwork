'use strict'

angular.module('myApp.service01', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/service01', {
			templateUrl: 'service01/service01.html',
			controller: 'service01Ctrl'
		});
	}]);