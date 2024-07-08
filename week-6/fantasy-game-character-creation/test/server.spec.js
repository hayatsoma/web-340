const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here

describe('Character Creation API', () => {
  let server;
  let baseUrl = 'http://localhost:3000';

  beforeAll(() => {
    server = require('../src/server');
  });

  afterAll(() => {
    server.close();
  });

  test('POST /create-character creates a new character', async () => {
    const response = await fetch(`${baseUrl}/create-character?class=Warrior&gender=Male&funFact=Loves pizza`, { method: 'POST' });
    const data = await response.json();
    expect(response.status).toBe(201);
    expect(data.message).toBe('Character created');
  });

  test('POST /confirm-character confirms the character creation', async () => {
    const response = await fetch(`${baseUrl}/confirm-character`, { method: 'POST' });
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.message).toBe('Character creation confirmed');
  });

  test('GET /view-character returns the created character', async () => {
    const response = await fetch(`${baseUrl}/view-character`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.class).toBe('Warrior');
    expect(data.gender).toBe('Male');
    expect(data.funFact).toBe('Loves pizza');
  });
});
