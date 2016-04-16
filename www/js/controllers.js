angular.module('app.controllers', [])
	
.controller('page1Ctrl', function($scope) {

})
   
.controller('pageCtrl',['$scope', 'myservice', function($scope, myservice) {
	
	$scope.setpettype = function (event) {
		console.log(event.target.id);
		myservice.setpet(event.target.id);
		// var pettype={};
		// pettype=myservice.getpet();
		// console.log(pettype);
		console.log(myservice.getpet());
	};
}])
 
 .controller('page2Ctrl',['$scope', '$http', 'catservice', function($scope, $http, catservice) {
	 
	$scope.setSelected = function (catid) {
		console.log(catid);
		catservice.setcat(catid);
	};
	 
	$http.get("http://sumudra.net/pet/getservice.asmx/GetCategory")
	.then(function(response) {
      $scope.users = response.data.categories;
		console.log($scope.users);
	});
}])

.controller('page3Ctrl',['$scope', '$http', 'myservice', 'catservice', function($scope, $http, myservice, catservice) {
	console.log(myservice.getpet());
	console.log(catservice.getcat());
	
	$( document ).ready(function() {
		var i="yes";
		if(i="no")i="yes";
		else{i="no";location.reload();}
		var data = $.param({
                id: catservice.getcat(),
                pet: myservice.getpet()
            }); 
				console.log(data);
      
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }           

            $http.post('http://sumudra.net/pet/getservice.asmx/GetstockbyPetType', data, config)
            .success(function (data, status, headers, config) {
                $scope.response = data.stockbyPetType;
				console.log(data);
                
            })

            .error(function (data, status, header, config) {
                $scope.response = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
		
	});
	
	function PostData() {

            var data = $.param({
                id: catservice.getcat(),
                pet: myservice.getpet()
            }); 
				console.log(data);
      
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }           

            $http.post('http://sumudra.net/pet/getservice.asmx/GetstockbyPetType', data, config)
            .success(function (data, status, headers, config) {
                $scope.response = data.stockbyPetType;
				console.log(data);
                
            })

            .error(function (data, status, header, config) {
                $scope.response = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };
}])

