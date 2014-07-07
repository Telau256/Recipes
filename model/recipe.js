/**
 * Recipe schema/model
 */

var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({ 
	name: String,
	ingredients: [ { ingredient: String } ],
	steps: [ { step: String}]
},
	{ collection: 'recipe' }
);

mongoose.model('recipe', recipeSchema);



