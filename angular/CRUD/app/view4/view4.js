'use strict';

angular.module('myApp.view4', ['ngRoute'])

.controller('View4Ctrl', function($scope, $location, items){
	var main = this;
	main.stories=[
		{id: 1, name : "user01", phone:"0101", addr:"addr01"},
		{id: 2,name : "user02", phone:"0102", addr:"addr02"},
		{id: 3,name : "user03", phone:"0103", addr:"addr03"},
		{id: 4,name : "user04", phone:"0104", addr:"addr04"},
		{id: 5,name : "user05", phone:"0105", addr:"addr05"},
		{id: 6,name : "user06", phone:"0106", addr:"addr06"},
		{id: 7,name : "user07", phone:"0107", addr:"addr07"}
	];
	var cnt = 7;
	main.btnClick = function(){
		$location.path("/view1");
	};
	main.insert = function(){
		console.log("insert");

		$scope.new_name = $scope.new_name || "";
		$scope.new_phone = $scope.new_phone || "";
		$scope.new_addr = $scope.new_addr || "";

		if($scope.new_name === ""){
			alert("input name");
			return;
		};
		cnt = cnt++;
		main.stories.push({
			id: cnt,
			name: $scope.new_name,
			phone: $scope.new_phone,
			addr: $scope.new_addr
		});
		items.pushItem({
			name: $scope.new_name,
			phone: $scope.new_phone,
			addr: $scope.new_addr
		});

		console.log(cnt);

	};
	main.delete = function(id){
		console.log(id);
		main.stories.splice(id,1);
		cnt--;
		console.log(cnt);
	};

	main.update = function(id){
		main.stories[id-1].name = $scope.new_name;
		main.stories[id-1].phone = $scope.new_phone;
		main.stories[id-1].addr = $scope.new_addr;
	};
	main.beforeupdate = function(id){
		$scope.update_id = id;
		$scope.new_name = main.stories[id-1].name;
		$scope.new_phone = main.stories[id-1].phone;
		$scope.new_addr = main.stories[id-1].addr;
	};

});