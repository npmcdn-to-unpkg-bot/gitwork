'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', function($scope) {
		$scope.members = [
			{id:"user00", "name":"one", years:"42"},
			{id:"user01", "name":"two", years:"46"},
			{id:"user02", "name":"three", years:"36"},
			{id:"user03", "name":"four", years:"56"},
			{id:"user04", "name":"five", years:"48"},
			{id:"user05", "name":"six", years:"42"},
			{id:"user06", "name":"seven", years:"43"},
			{id:"user07", "name":"eight", years:"49"}
		];
		$scope.orderByMe = function(x){
			$scope.myOrderBy = x;
		};

		$scope.content = ["html","java", "javascript", "python", "asdf"];

		$scope.changeSearch = function(type){
			for(var prop in $scope.search){
				console.log(prop);
				if(prop !== type){
					$scope.search[prop]="";
				}
			}
		}
});