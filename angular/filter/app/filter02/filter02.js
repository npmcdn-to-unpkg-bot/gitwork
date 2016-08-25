'use strict';

angular.module('myApp.filter02', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/filter02', {
			templateUrl: 'filter02/filter02.html',
			controller: 'filter02Ctrl'
		});
	}])

	.controller('filter02Ctrl', function($scope) {
		$scope.content = [
			"HTML", "JavaScript", "Java", "Python", "C#", ".NET", "Objective-C", "Jython"
		];
	});