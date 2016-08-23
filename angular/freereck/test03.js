var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/menu1', {templateUrl: 'pages/menu1.html'})
	.when('/menu2', {templateUrl: 'pages/menu2.html'})
	.when('/menu3', {templateUrl: 'pages/menu3.html'})
	.otherwise({redirectTo: '/menu1'});
});