
'use strict';

angular.module('myAdminApp')
  .controller('ListRessourceCtrl', function ($scope,Ressource) {

	  Ressource.loadRessources().success(function(resp){
	        $scope.ressources = resp;
	    });  
  });






