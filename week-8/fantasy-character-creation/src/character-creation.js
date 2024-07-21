"use strict";

// For promises:
const fs = require('fs').promises;

async function createCharacter(filePath, character) {
  try {
    await fs.writeFile(filePath, JSON.stringify(character));
  } catch (error) {
    throw new Error('Error writing character data to file');
  }
}

async function getCharacters(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Error reading character data from file');
  }
}

module.exports = {
  createCharacter,
  getCharacters,
};
