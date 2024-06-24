/**
 * Author: Hayat Soma
 * Date:6/23/2024
 * File Name:
 * Description:
*/

// src/index.js
import TacoStandEmitter from './taco-stand.js';
import readline from 'readline';

const tacoStand = new TacoStandEmitter();

tacoStand.on('serve', (customer) => {
    console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on('prepare', (taco) => {
    console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on('rush', (rush) => {
    console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [command, ...args] = input.split(' ');
    const argument = args.join(' ');

    switch (command) {
        case 'serve':
            tacoStand.serveCustomer(argument);
            break;
        case 'prepare':
            tacoStand.prepareTaco(argument);
            break;
        case 'rush':
            tacoStand.handleRush(argument);
            break;
        default:
            console.log(`Unknown command: ${command}`);
    }
});
