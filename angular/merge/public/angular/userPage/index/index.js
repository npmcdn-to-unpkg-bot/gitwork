'use strict';

angular.module('userPage.index', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/',{
		templateUrl: 'angular/userPage/index/index.html',
		controller: 'indexCtrl'
	});
}])
.controller('indexCtrl', function($scope, Autentication){
	$scope.userID = Autentication.user;
	$scope.email =  Autentication.email;
})
.factory('Autentication', [
	function(){
		this.user = window.currentUser;
		this.email = window.userEmail;

		return{
			user : this.user,
			email : this.email
		};
	}
]);