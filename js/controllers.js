angular.module('myApp.controllers', [])
	.controller('SiteController', function($scope){
		$scope.publisher = 'SitePoint'
		$scope.type = 'Web Development'
		$scope.name = 'Scope for SiteController'
	})

angular.module('myApp.controllers')
	.controller('BookController', function($scope){
		$scope.books = ['Jump start HTML5', 'Jump start CSS', 'Jump Start Responsive Web Design']
		$scope.name = 'Scope for BookController'
})
