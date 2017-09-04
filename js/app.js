'use strict'

angular.module('myApp', [
	'myApp.controllers'
])

angular.module('myApp').run(function($rootScope){
	$rootScope.title = 'Famous books'
	$rootScope.name = 'Root Scope'
})
