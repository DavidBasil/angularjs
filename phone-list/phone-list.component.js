angular.module('phoneList').component('phoneList', {
	// template
	templateUrl: 'phone-list/phone-list.template.html',
	// controller
	controller: ['Phone',
		function PhoneListController(Phone){
			this.phones = Phone.query()
			this.orderProp = 'age'
		}
	]
})
