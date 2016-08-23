var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	$scope.stories = [
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


app.directive('output',function(){
	return {
		scope: true,
		replace: true,
		template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
	};
});