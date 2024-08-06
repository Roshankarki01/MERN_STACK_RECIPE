const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Recipe name is required"],
  },
  time: {
    type: Number,
    required: [true, "Recipe time is required"],
  },
  ingredients: {
    type: [String],
    required: [true, "Recipe ingredients is required"],
  },
  shoppingList: {
    type: [String],
    required: [true, "Recipe shoping is required"],
  },
  fullCookInfo: {
    type: String,
    required: [true, "Recipe full cook information is required"],
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
