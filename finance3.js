angular.module('finance3', [])
	.factory('currencyConverter', ['$http', function($http){
		var currencies = ['USD', 'EUR', 'CNY']
		var usdToForeignRates = {}
		var convert = function(amount, inCurr, outCurr){
			return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr]
		}
		// refresh
		var refresh = function(){
			var url = 'https://api.fixer.io/latest?base=USD&symbols=' + currencies.join(',')
			return $http.get(url).then(function(response){
				usdToForeignRates = response.data.rates
				usdToForeignRates['USD'] = 1
			})
		}	
		refresh()
		return {
			currencies: currencies,
			convert: convert
		}
	}]) // end of factory