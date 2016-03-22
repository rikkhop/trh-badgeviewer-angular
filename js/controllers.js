var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('coursesCtrl', ['$scope', 'BadgeList',
	function($scope, BadgeList) {

		BadgeList.getBadges(function(res) {

			$scope.badges = res.data.badges;

  		$scope.courses = ["Uncategorised"];

  		angular.forEach(res.data.badges, function(badge) {
  			if(badge.courses[0]) {
  				var course = badge.courses[0].title;
  			} else {
  				var course = "Uncategorised";
  			}
  			if($scope.courses.indexOf(course) === -1) {
  				$scope.courses.push(course);
  			}
  		});

  		$scope.itemsPerPage = 10;

	  	$scope.pageNumber = 0;

	  	$scope.currentCourseIndex = 0;

			$scope.currentCourse = $scope.courses[$scope.currentCourseIndex];

			$scope.pages = Math.ceil($scope.courses.length / $scope.itemsPerPage);

			$scope.spinner = false;
			
  	});
 	
	  $scope.spinner = true;


	}]);

portfolioControllers.controller('badgesCtrl', ['$scope', 'BadgeList',
	function($scope, BadgeList) {

		BadgeList.getBadges(function(res) {

  		$scope.badges = res.data.badges;

  	});

  	$scope.showDetails = false;

  	$scope.badgeList = true;

  	$scope.currentBadgeId = 'null';

	}]);