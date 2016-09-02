'use strict';

angular.module('login.sign-up', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/sign-up',{
		templateUrl: 'angular/sign-up/sign-up.html',
		controller: 'signUpCtrl'
	});
}])
.controller('signUpCtrl', function($scope){

});