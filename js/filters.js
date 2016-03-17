var portfolioFilters = angular.module('portfolioFilters', []);

portfolioFilters.filter('courses', function() {
	return function(badges, course) {
		var output = [];
		angular.forEach(badges, function(badge) {
		//$.each(badges, function(index, badge) {
			if(badge.courses[0]) {
				if(badge.courses[0].title === course) {
					output.push(badge);
				}
			} else {
				if(course == "Uncategorised") {
					output.push(badge);
				}
			}
			
		});
		return output;
	}
});

portfolioFilters.filter('offset', function() {
  return function(input, start) {
    //var start = parseInt(start, 10);
    return input.slice(start);
  };
});

portfolioFilters.filter('round', function() {
  return function(input) {
  	var input = parseInt(input);
    return Math.round(input);
  };
});

portfolioFilters.filter('roundDown', function() {
  return function(input) {
    return Math.floor(input);
  };
});