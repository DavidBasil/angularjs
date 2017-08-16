angular.module('phonecatApp').component('phoneList', {
	// template
	template:
	'<ul>' +
		'<li ng-repeat="phone in $ctrl.phones">' +
		'<span>{{phone.name}}</span>' +
		'<p>{{phone.snippet}}</p>' +
		'</li>' +
	'<p>Total number of phones: <h2>{{$ctrl.phones.length}}</h2></p>' +
	'</ul>',
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
