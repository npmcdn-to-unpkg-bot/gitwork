'use strict';

angular.module('myApp.ngShow', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngShow', {
			templateUrl: 'ngShow/ngShow.html',
			controller: 'ngShowCtrl'
		});
}])
.controller('ngShowCtrl', function($scope){

});