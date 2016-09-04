'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.orderBy',
	'myApp.orderByClick',
	'myApp.filter01',
	'myApp.filter02',
	'myApp.filter_orderby',
	'myApp.searchType',
	'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/orderBy'});
}])

.service('serviceTest', function(){
	console.log('serviceTest!');
	this.data1 = "HTML";
});
