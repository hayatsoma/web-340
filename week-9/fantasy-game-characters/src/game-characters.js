// src/game-characters.js
const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptName) {
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    const child = spawn('node', [this.scriptPath]);

    let data = '';
    let error = '';

    child.stdout.on('data', (chunk) => {
      data += chunk;
    });

    child.stderr.on('data', (chunk) => {
      error += chunk;
    });

    child.on('close', (code) => {
      if (code !== 0) {
        console.error(`Script exited with code ${code}`);
        return callback(new Error(`Script exited with code ${code}`), null);
      }
      if (error) {
        console.error(`Script error: ${error}`);
        return callback(new Error(error), null);
      }
      callback(null, data);
    });

    child.on('error', (err) => {
      console.error(`Failed to start child process: ${err.message}`);
      callback(err, null);
    });
  }
}

module.exports = { GameCharacters };

