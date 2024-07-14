const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const testData = { class: 'Warrior', gender: 'Male', funFact: 'Loves dragons' };
    characterCreator.once('data', (data) => {
      const parsedData = JSON.parse(data.toString());
      expect(parsedData.class).toBe(testData.class);
      expect(parsedData.gender).toBe(testData.gender);
      expect(parsedData.funFact).toBe(testData.funFact);
      done();
    });
    characterCreator.write(JSON.stringify(testData));
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    const invalidData = '{ class: "Warrior", gender: "Male" }'; // Invalid JSON format
    characterCreator.on('error', (error) => {
      expect(error.message).toBe('Invalid data format');
      done();
    });
    characterCreator.write(invalidData);
    characterCreator.end();
  });

  test("should transform data correctly when written to", (done) => {
    const testData = { class: 'Mage', gender: 'Female', funFact: 'Master of spells' };
    characterCreator.once('data', (data) => {
      const transformedData = JSON.parse(data.toString());
      expect(transformedData).toEqual(testData);
      done();
    });
    characterCreator.write(JSON.stringify(testData));
    characterCreator.end();
  });
});
