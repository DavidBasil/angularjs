angular.module('phoneList').component('phoneList', {
	// template
	templateUrl: 'phone-list/phone-list.template.html',
	// controller
	controller: function PhoneListController() {
		this.phones = [
			{
				name: 'Nexus S',
				snippet: 'Fast just got faster with Nexus S.'
			},
			{
				name: 'Nexus S',
				snippet: 'The Next, Next Generation tablet.'
			},
			{
				name: 'MOTOROLA XOOM',
				snippet: 'The next, next generation tablet.'
			}
		]
	}
})
