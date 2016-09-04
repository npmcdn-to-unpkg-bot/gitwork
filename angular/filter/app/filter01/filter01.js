'use strict';

angular.module('myApp.filter01', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/filter01', {
			templateUrl: 'filter01/filter01.html',
			controller: 'filter01Ctrl'
		});
	}])

	.controller('filter01Ctrl', function($scope,serviceTest) {
		$scope.content = [
			serviceTest.data1 , "JavaScript", "Java", "Python", "C#", ".NET", "Objective-C", "Jython"
		];

	});