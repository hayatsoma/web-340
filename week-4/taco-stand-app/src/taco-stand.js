/**
 * Author: Hayat Soma
 * Date: 6/23/2024
 * File Name:
 * Description:
*/

// src/taco-stand.js
import { EventEmitter } from 'events';

class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer) {
        this.emit('serve', customer);
    }

    prepareTaco(taco) {
        this.emit('prepare', taco);
    }

    handleRush(rush) {
        this.emit('rush', rush);
    }
}

export default TacoStandEmitter;
