'use strict';

angular.module('myApp.ngRepeat', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngRepeat', {
			templateUrl: 'ngRepeat/ngRepeat.html',
			controller: 'ngRepeatCtrl'
		});
	}])
	.controller('ngRepeatCtrl', function($scope){
		$scope.grades=[
			{subject:"Korean", grade:"A"},
			{subject:"English", grade:"B"},
			{subject:"Math", grade:"C"},
			{subject:"Science", grade:"D"}
		];

	});