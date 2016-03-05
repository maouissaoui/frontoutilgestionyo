"use strict";

myAdminApp.factory("Ressource", function ($http) {
    var API_URI = '/api/ressources';

    return {

    	loadRessources : function() {
            return $http.get(API_URI);
        },

        createRessource : function(ressource) {
            return  $http.post(API_URI, ressource);
        },

        deleteRessource  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        findByIdRes : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(ressource) {
             return $http.put(API_URI, ressource);
        }

    };

});
