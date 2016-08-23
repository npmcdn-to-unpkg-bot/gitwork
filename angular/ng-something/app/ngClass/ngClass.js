'use strict';

angular.module('myApp.ngClass', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngClass', {
			templateUrl: 'ngClass/ngClass.html',
			controller: 'ngClassCtrl'
		});
	}])
	.controller('ngClassCtrl', function($scope){

	});