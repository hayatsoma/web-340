function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
}

module.exports = calculateDistance;


/**
 * Calculates the distance between two planets given their distances from the Sun in AU.
 * @param {number} distance1 - The distance of the first planet from the Sun in AU.
 * @param {number} distance2 - The distance of the second planet from the Sun in AU.
 * @returns {number} - The distance between the two planets in AU.
 */
function calculateDistance(distance1, distance2) {
  if (typeof distance1 !== 'number' || typeof distance2 !== 'number') {
    throw new Error('Both distances must be numbers');
  }
  return Math.abs(distance1 - distance2);
}

module.exports = calculateDistance;