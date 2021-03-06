'use strict';

angular.module('myApp.orderBy', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/orderBy', {
			templateUrl: 'orderBy/orderBy.html',
			controller: 'OrderByCtrl'
		});
	}])

	.controller('OrderByCtrl', function($scope) {
		$scope.members = [
			{"id":"user00", "name":"user00", "years": "52"},
			{"id":"user01", "name":"user01", "years": "46"},
			{"id":"user02", "name":"user02", "years": "1"},
			{"id":"user03", "name":"user03", "years": "2"},
			{"id":"user04", "name":"user04", "years": "2"},
			{"id":"user05", "name":"user05", "years": "32"},
			{"id":"user06", "name":"user06", "years": "2"}
		];
		$scope.criteria = $scope.criteria|"id";
	});