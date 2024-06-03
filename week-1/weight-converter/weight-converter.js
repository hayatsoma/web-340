/**
 * Author:Hayat Soma
 * Date:06-02-2024
 * File Name: 
 * Description:
*/

"use strict";

// TODO: Implement the weight conversion logic here

// weight-converter.js

// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
    const kilograms = pounds * 0.45359237;
    return kilograms;
}

// Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
    console.error('Usage: node weight-converter.js <pounds>');
    process.exit(1);
}

// Get the weight in pounds from command line arguments
const pounds = parseFloat(process.argv[2]);

// Check if the input is a valid number
if (isNaN(pounds)) {
    console.error('Input must be a number.');
    process.exit(1);
}

// Convert pounds to kilograms
const kilograms = poundsToKilograms(pounds);

// Output the result
console.log(`${pounds} pounds is equal to ${kilograms.toFixed(2)} kilograms`);