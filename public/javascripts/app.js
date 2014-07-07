'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/recipes',
            controller: IndexCtrl
        }).
        when('/recipe/:id', {
            templateUrl: 'partials/recipe',
            controller: RecipeCtrl
        }).
        when('/newRecipe/', {
            templateUrl: 'partials/newRecipe',
            controller: CreateRecipeCtrl
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
  }]);