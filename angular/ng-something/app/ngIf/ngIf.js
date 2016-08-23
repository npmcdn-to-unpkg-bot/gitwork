'use strict';

angular.module('myApp.ngIf', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngIf', {
			templateUrl: 'ngIf/ngIf.html',
			controller: 'ngIfCtrl'
		});
	}])
	.controller('ngIfCtrl', function($scope){

	});