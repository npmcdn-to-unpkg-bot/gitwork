'use strict';

angular.module('myApp.ngSwitch',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngSwitch',{
			templateUrl: 'ngSwitch/ngSwitch.html',
			controller: 'ngSwitchCtrl'
		});

	}])
.controller('ngSwitchCtrl', function($scope){

});