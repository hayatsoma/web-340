/**
 * Author: Hayat Soma
 * Date:
 * File Name:
 * Description:
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require('./recipes');

const ingredients = ['flour', 'sugar', 'eggs'];
console.log(createRecipe(ingredients));

const minutes = 30;
console.log(setTimer(minutes));

console.log(quit());

// TODO: Implement your CLI program here