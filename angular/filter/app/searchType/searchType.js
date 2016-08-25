'use strict';

angular.module('myApp.searchType', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/searchType', {
			templateUrl: 'searchType/searchType.html',
			controller: 'searchType'
		});
	}])

	.controller('searchType', function($scope) {
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
		$scope.search = {"id": "", "name": "", "years":"", $:""};
		$scope.changeSearch = function(type){
			for (var prop in $scope.search){
				console.log(prop);
				if(prop !== type){
					$scope.search[prop]="";
				}
			}
		};
	});