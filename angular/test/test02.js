var app = angular.module('myApp', []);

app.service('hexafy',function(){
	this.myFunc = function(x){
		return x.toString(16);
	}
});

app.controller('hexaoutput', function($scope, hexafy){
	$scope.hex = hexafy.myFunc(255);
});

app.controller('whatIsService', function($scope, hexafy){
	$scope.hex = hexafy.myFunc(127);
});