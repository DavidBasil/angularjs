angular.module('myApp.controllers', [])
	.controller('GreetingController', function($scope){
		$scope.now = new Date()
		$scope.greeting = 'Hello' 
	})
