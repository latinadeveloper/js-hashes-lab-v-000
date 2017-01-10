'use strict';

function addIngredient(recipe, ingredient, value){
  recipe[ingredient] = value;
  return recipe;
}

function removeIngredient(recipe, ingredient){
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, value){
  recipe[ingredient] = value;
  return recipe;
}

function readRecipe(recipe) {
  for (var key in recipe) {
  console.log("this recipe calls for " + recipe[key] + " of " + key)
};
}
