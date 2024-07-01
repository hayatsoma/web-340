/**
 * Author:Hayat SOMA
 * Date: 6/30/2024
 * File Name:
 * Description:
 */

"use strict";

const bakePie = require('../src/pie');

test('bakes a pie with all essential ingredients', () => {
  const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
  expect(result).toBe('Successfully baked a apple pie with flour, sugar, butter, apples.');
});

test('fails to bake a pie missing flour', () => {
  const exitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const consoleMock = jest.spyOn(console, 'warn').mockImplementation(() => {});

  bakePie('apple', ['sugar', 'butter', 'apples']); // Missing 'flour' from essential ingredients

  expect(consoleMock).toHaveBeenCalledWith('Missing essential ingredients: flour');
  expect(exitMock).toHaveBeenCalledWith(1);

  consoleMock.mockRestore();
  exitMock.mockRestore();
});

test('fails to bake a pie missing sugar and butter', () => {
  const exitMock = jest.spyOn(process, 'exit').mockImplementation(() => {});
  const consoleMock = jest.spyOn(console, 'warn').mockImplementation(() => {});

  bakePie('cherry', ['flour', 'cherries']); // Missing 'sugar' and 'butter' from essential ingredients

  expect(consoleMock).toHaveBeenCalledWith('Missing essential ingredients: sugar, butter');
  expect(exitMock).toHaveBeenCalledWith(1);

  consoleMock.mockRestore();
  exitMock.mockRestore();
});




