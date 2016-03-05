'use strict';

angular.module('myAdminApp')
  .controller('EditRessourceCtrl', function ($scope,Ressource,$routeParams,$location) {

	  $scope.state = "new";
      //Check if we have a ressource
      if ($routeParams.id) {
          $scope.state = "update";
          Ressource.findByIdRes($routeParams.id).then(function (response) {
              $scope.ressource = response.data;
          })
      }
      $scope.getBtnLabel=function(){
          return ($scope.state=="new")?"Ajouter":"Modifier";
      };
	  $scope.submit=function(){
          if($scope.state = "new"){
        	  Ressource.createRessource($scope.ressource);
          }
          else{
        	  Ressource.update($scope.ressource);
          }
          $location.path('/ressources');
      }	 
	  
  });
