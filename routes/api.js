
var mongoose = require( 'mongoose' );
var Recipe = mongoose.model('recipe');

exports.getRecipes = function (req, res) {

	Recipe.find({}, function (err, retrievedRecipes) {

		// ToDo: Error handling		
		
		var aRecipes = [];
		
		retrievedRecipes.forEach(function (recipe, i) {
			var recipeId = recipe._id;			
			var name = recipe.name;
			
			aRecipes.push({
				id: recipeId,
				name: name
			});		
		});
		res.json({
			recipes: aRecipes
		});
		
	});
};

exports.getRecipe = function (req, res) {

	var recipeId = req.params.id;
	
	Recipe.findOne({_id: recipeId}, function (err, retrievedRecipe) {
		// ToDo: Error handling

		res.json({
			recipe: retrievedRecipe
		});		
		
	});

};

exports.updateRecipe = function (req, res) {
	
	var recipeId = req.params.id;
	var ingr = req.body.ingredients;
	var st = req.body.steps;
	
	var query = { _id: recipeId };
	//var update = { $set: { ingredients: { ingredient: "Lekkerrrr"} } };
	var update = { $set: { ingredients: ingr, steps: st} };
	var options = { multi: false };

	Recipe.update(query, update, options, callback);

	function callback (err, numAffected) {
	  // numAffected is the number of updated documents
	}
};

exports.addRecipe = function (req, res) {	
	Recipe.name = res.params.name; 
	Recipe.save();	
};


exports.deleteRecipe = function (req, res) {
	var recipeId = req.params.id;
	
	Recipe.find({ id: recipeId}).remove();
};