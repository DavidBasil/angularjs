var app = angular.module('myApp', [])

app.controller('gListCtrl', function($scope){
	// list of groceries
	$scope.groceries = [
		{item:'Tomatoes', purchased:false},
		{item:'Potatoes', purchased: false},
		{item:'Bread', purchased: false},
		{item:'Hummus', purchased: false}
	]
	// add item function
	$scope.addItem = function(newItem){
		if(!(newItem === undefined || newItem === '')){
			$scope.groceries.push({
				item: newItem,
				purchased: false
			})
			$scope.missingNewItemError = ""
		} else {
			$scope.missingNewItemError = "Please enter a new item"
		}
	}
})
