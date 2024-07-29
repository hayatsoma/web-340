// test/game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");
const path = require("path");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    // Initialize the GameCharacters instance with the correct script path
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((err, data) => {
      if (err) return done(err);
      const expectedData = [
        { class: "Warrior", gender: "Male", funFact: "Strong and brave" },
        { class: "Mage", gender: "Female", funFact: "Master of spells" },
        { class: "Rogue", gender: "Other", funFact: "Stealthy and agile" }
      ];
      expect(JSON.parse(data)).toEqual(expectedData);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    gameCharacters = new GameCharacters("non-existent-script.js");
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeNull(); // Use null for error cases
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeNull(); // Use null for error cases
      done();
    });
  });
});

