'use strict';

angular.module('myAdminApp')
  .controller('RessourceCtrl', function ($scope,Ressource,$routeParams,$location) {

	  Ressource.findByIdRes($routeParams.id).success(function(resp){
	        $scope.ressource = resp;
	    });  
	  
	  $scope.delete=function(){
          var r = confirm("Voulez vous supprimer ce ressource ?");
          if (r == true) {
        	  Ressource.deleteRessource($scope.ressource.id).then(function(){
                  $location.path('/ressources');
              })
          }
      }
	  
  });
