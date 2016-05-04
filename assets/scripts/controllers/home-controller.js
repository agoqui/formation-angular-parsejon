mainApp.controller('HomeController', ['$scope','$http',function($scope,$http) { 

	$scope.titre = 'Welcome!!!';


	// 	Simple GET request example:
	$http({
	  method: 'GET',
	  url: 'users.json'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	   
	    //$scope.titre = response.status+' '+response.statusText;
	    $scope.myJson = response.data;
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	     $scope.titre = response.status+' '+response.statusText;
	  });

}]);
