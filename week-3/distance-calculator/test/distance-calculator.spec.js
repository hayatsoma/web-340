const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testFunctionDescription() {
  // TODO: Implement this function
}


// Test 1
function testEarthToMars() {
  try {
    const distance1 = 1; // Example distance from the Sun for Earth
    const distance2 = 1.5; // Example distance from the Sun for Mars
    const expectedDistance = 0.5;
    assert.strictEqual(calculateDistance(distance1, distance2), expectedDistance);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2
function testSamePlanet() {
  try {
    const distance1 = 2; // Example distance from the Sun for a planet
    const expectedDistance = 0;
    assert.strictEqual(calculateDistance(distance1, distance1), expectedDistance);
    console.log('Passed testSamePlanet');
    return true;
  } catch (error) {
    console.error(`Failed testSamePlanet: ${error.message}`);
    return false;
  }
}

// Test 3
function testInvalidInput() {
  try {
    const distance1 = "a"; // Invalid distance from the Sun
    const distance2 = 5;
    calculateDistance(distance1, distance2);
    console.error('Failed testInvalidInput: No error was thrown for invalid input');
    return false;
  } catch (error) {
    console.log('Passed testInvalidInput');
    return true;
  }
}


// Call your test functions here

testEarthToMars();
testSamePlanet();
testInvalidInput();