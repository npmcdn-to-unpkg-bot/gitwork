'use strict';

angular.module('myApp.ngModel', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngModel', {
			templateUrl: 'ngModel/ngModel.html',
			controller: 'ngModelCtrl'
		});
}])
.controller('ngModelCtrl', function($scope){
		var product = {
			cnt : 10,
			price : 25
		};
		$scope.product = product;
});