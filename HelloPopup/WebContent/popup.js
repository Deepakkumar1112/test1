angular.module('HelloPopup', [])
.controller('Popup', function($scope, $http) {
	var id =2;
	var url = 'http://localhost:8080/api/todos/'+id;
    $http.get(url).
        then(function(response) {
            $scope.todos = response.data;
        });
});


/*var app = angular.module('HelloPopup', []);

app.controller('Popup', function($scope) {

	  $scope.init = function( id)
	  {
		  var url = 'http://localhost:8080/api/todos/'+id;
		  alert(url);
		  $http.get(''+url).
	        then(function(response) {
	            $scope.todos = response.data;
	        });
	  };


	});*/