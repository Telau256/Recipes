'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
//  value('version', '0.1');


var module = angular.module('myApp.services', []);

module.service('handlingGUI', function(){
    return {
        addIngredient: function(scope) {
            scope.recipe.ingredients.push({});
        },

        addStep: function(scope) {
            scope.recipe.steps.push({});
        },

        removeIngredient: function(scope, index) {
            scope.recipe.ingredients.splice(index, 1);
        },

        removeStep: function(scope, index) {
            scope.recipe.steps.splice(index, 1);
        }
    }
});

