var portfolioDirectives = angular.module('portfolioDirectives', []);

portfolioDirectives.directive('badgeViewer', function() {
	return {
			templateUrl: 'partials/badge-viewer.html',
			controller: 'coursesCtrl',
			replace: true,
		}
});

portfolioDirectives.directive('courseBadges', function() {
	return {
			templateUrl: 'partials/course-badges.html',
			controller: 'badgesCtrl',
			replace: true,
		}
});

portfolioDirectives.directive('badgeDetails', function() {
	return {
			templateUrl: 'partials/badge-details.html',
			controller: 'badgesCtrl',
			replace: true,
		}
});