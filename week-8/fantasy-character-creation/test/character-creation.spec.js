"use strict";

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'test-character.json');

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  afterEach(async () => {
    // Cleanup: remove the test file if it exists
    try {
      await fs.unlink(filePath);
    } catch (err) {
      // File might not exist, ignore error
    }
  });

  test('createCharacter writes a new character to the file', async () => {
    const character = { class: 'Warrior', gender: 'Male', trait: 'Brave' };
    await createCharacter(filePath, character);
    const data = await fs.readFile(filePath, 'utf8');
    expect(JSON.parse(data)).toEqual(character);
  });

  test('getCharacters reads characters from the file', async () => {
    const character = { class: 'Mage', gender: 'Female', trait: 'Wise' };
    await fs.writeFile(filePath, JSON.stringify(character));
    const readCharacter = await getCharacters(filePath);
    expect(readCharacter).toEqual(character);
  });

  test('createCharacter handles errors when writing to the file', async () => {
    jest.spyOn(fs, 'writeFile').mockImplementation(() => {
      throw new Error('Error writing character data to file');
    });

    const character = { class: 'Rogue', gender: 'Other', trait: 'Stealthy' };
    await expect(createCharacter(filePath, character)).rejects.toThrow('Error writing character data to file');
  });
});
