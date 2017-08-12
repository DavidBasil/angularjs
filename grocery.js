var app = angular.module('myApp', [])

// grocery list controller
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

// user controller
app.controller('userCtrl', function($scope){
	$scope.user = [{
		fName: 'David',
		lName: 'Basil',
		subscribe: 'Subscribe',
		delivery: 'Email'
	}]
	// save user function
	$scope.saveUser = function(userInfo){
		if($scope.userForm.$valid){
			$scope.user.push({
				fName: userInfo.fName,
				lName: userInfo.lName,
				street: userInfo.street,
				subscribe: userInfo.subscribe,
				delivery: userInfo.delivery
			})
			console.log("User Saved")
		} else {
			console.log("Error: could not save user")
		}
	}
})
