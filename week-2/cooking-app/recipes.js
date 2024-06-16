/**
 * Author:Hayat Soma
 * Date: 6/9/2024
 * File Name:
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;

}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes.`;
}

// Define the quit function
function quit() {
  return 'Program exited';
}

module.exports = {
  createRecipe,
  setTimer,
  quit
};

// TODO: Export the functions