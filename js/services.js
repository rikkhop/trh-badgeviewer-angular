var portfolioServices = angular.module('portfolioServices', []);

portfolio.service('BadgeList', ['$http', 
	function($http) {
		
		this.getBadges = function(callback) {
			var name = "richardhope",
					url = "https://teamtreehouse.com/" + name + ".json";

			$http.get(url).then(callback);
		}

	}]);