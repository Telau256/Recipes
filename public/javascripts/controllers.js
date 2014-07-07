'use strict';

/* Controllers */

function IndexCtrl($scope, $http, $location) {
    $http.get('/api/getRecipes').
        success(function(data, status, headers, config) {
           $scope.recipes = data.recipes;
    });

    $scope.go = function (path) {
        $location.path(path);
    };

}

function CreateRecipeCtrl($scope, $http, $location, $routeParams, handlingGUI) {

    var emptyRecipe = {"name": "Nieuw recept", "ingredients": [{"ingredient":""}], "steps": [{"step":""}]};
    $scope.recipe = emptyRecipe;

    $scope.createRecipe = function () {
        $http.post('/api/createRecipe/', $scope.recipe);
    };

    $scope.addIngredient = function() {
        handlingGUI.addIngredient($scope);
    };

    $scope.removeIngredient = function(index) {
        handlingGUI.removeIngredient($scope, index);
    };

    $scope.addStep = function() {
        handlingGUI.addStep($scope);
    };

    $scope.removeStep = function(index) {
        handlingGUI.removeStep($scope, index);
    };
}

function RecipeCtrl($scope, $http, $location, $routeParams, handlingGUI) {
	$http.get('/api/getRecipe/' + $routeParams.id).
		success(function(data, status, headers, config) {
			$scope.recipe = data.recipe;
	});
	
	$scope.updateRecipe = function () {
		$http.put('/api/updateRecipe/' + $routeParams.id, $scope.recipe);
	};

    $scope.addIngredient = function() {
        handlingGUI.addIngredient($scope);
    };

    $scope.removeIngredient = function(index) {
        handlingGUI.removeIngredient($scope, index);
    };

    $scope.addStep = function() {
        handlingGUI.addStep($scope);
    };

    $scope.removeStep = function(index) {
        handlingGUI.removeStep($scope, index);
    };
}
