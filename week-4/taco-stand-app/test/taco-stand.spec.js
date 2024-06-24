// test/taco-stand.spec.js
import assert from 'assert';
import TacoStandEmitter from '../src/taco-stand.js';

function testServeCustomer() {
    try {
        const tacoStand = new TacoStandEmitter();
        tacoStand.on('serve', (customer) => {
            assert.strictEqual(customer, 'John');
            console.log("Passed testServeCustomer");
        });
        tacoStand.serveCustomer('John');
        return true;
    } catch (err) {
        console.error(`Failed testServeCustomer: ${err}`);
        return false;
    }
}

function testPrepareTaco() {
    try {
        const tacoStand = new TacoStandEmitter();
        tacoStand.on('prepare', (taco) => {
            assert.strictEqual(taco, 'beef');
            console.log("Passed testPrepareTaco");
        });
        tacoStand.prepareTaco('beef');
        return true;
    } catch (err) {
        console.error(`Failed testPrepareTaco: ${err}`);
        return false;
    }
}

function testHandleRush() {
    try {
        const tacoStand = new TacoStandEmitter();
        tacoStand.on('rush', (rush) => {
            assert.strictEqual(rush, 'lunch');
            console.log("Passed testHandleRush");
        });
        tacoStand.handleRush('lunch');
        return true;
    } catch (err) {
        console.error(`Failed testHandleRush: ${err}`);
        return false;
    }
}

// Run the tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
