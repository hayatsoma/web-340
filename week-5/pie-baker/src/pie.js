/**
 * Author: Hayat Soma
 * Date:6/30/2024
 * File Name:
 * Description:
 */

"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ['flour', 'sugar', 'butter'];
  const missingIngredients = essentialIngredients.filter(
    (ingredient) => !ingredients.includes(ingredient)
  );

  if (missingIngredients.length > 0) {
    console.warn(`Missing essential ingredients: ${missingIngredients.join(', ')}`);
    process.exit(1);
  }

  return `Successfully baked a ${pieType} pie with ${ingredients.join(', ')}.`;
}

module.exports = bakePie;
