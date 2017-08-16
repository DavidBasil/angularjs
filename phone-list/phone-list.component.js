angular.module('phoneList').component('phoneList', {
	// template
	templateUrl: 'phone-list/phone-list.template.html',
	// controller
	controller: ['$http',
		function PhoneListController($http){
			var self = this
			self.orderProp = 'age'
			// http
			$http.get('phones/phones.json').then(function(response){
				self.phones = response.data
			})
		}
	]
})
