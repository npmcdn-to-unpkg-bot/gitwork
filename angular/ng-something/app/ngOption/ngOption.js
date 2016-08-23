'use strict';

angular.module('myApp.ngOption',['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/ngOption',{
			templateUrl: 'ngOption/ngOption.html',
			controller: 'ngOptionCtrl as vm'
		});

	}])
	.controller('ngOptionCtrl', function($scope){
		var vm = this;

		vm.selectOption = [
			{code:'1', name:'A'},
			{code:'2', name:'B'},
			{code:'3', name:'C'}
		];

		vm.optSelected = vm.selectOption[0];
	});