'use strict';

angular.module('login.index', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/',{
		templateUrl: 'angular/login/index/index.html',
		controller: 'indexCtrl'
	});
}])
.controller('indexCtrl', function($scope){
	$scope.slides = [
		{image: 'img/login/da1.jpg', description: 'Image 00'},
		{image: 'img/login/da2.jpg', description: 'Image 01'},
		{image: 'img/login/da3.jpg', description: 'Image 02'},
		{image: 'img/login/da4.jpg', description: 'Image 03'}
	];
	
	$scope.currentIndex = 0;
	$scope.setCurrentSlideIndex = function (index){
		$scope.currentIndex = index;
	};
	$scope.isCurrentSlideIndex = function(index){
		return $scope.currentIndex === index;
	};
});