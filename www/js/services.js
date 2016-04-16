angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('myservice', function() {
	
	var pet = {};

    return {
        getpet: function () {
            return pet;
        },
        setpet: function(data) {
            pet = data;
        }
    };
})

.service('catservice', function() {
	
	var cat = {};

    return {
        getcat: function () {
            return cat;
        },
        setcat: function(data) {
            cat = data;
        }
    };
})

