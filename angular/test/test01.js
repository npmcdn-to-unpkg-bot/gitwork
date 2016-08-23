var app = angular.module('myApp', []);

app.service('hexafy',function(){
	this.myFunc = function(x){
		return x.toString(16);
	}
});

app.controller('myCtrl', function(){
	var main = this;

	main.stories = [
		{
			title: '첫번째 스토리',
			description: '첫번째 사용자 스토리',
			criteria: '요구사항 정리중 ....'
		},
		{
			title: '두번째 스토리',
			description: '두번째 사용자 스토리',
			criteria: '요구사항 정리중 ....'
		},
		{
			title: '세번째 스토리',
			description: '세번째 사용자 스토리',
			criteria: '요구사항 정리중 ....'
		}
	]
});

app.controller('hexaoutput', function($scope, hexafy){
	$scope.hex = hexafy.myFunc(255);
});