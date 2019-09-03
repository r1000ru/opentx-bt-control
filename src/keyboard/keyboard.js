import { Events } from '../events/events.js'

const Keyboard = function() {
    document.addEventListener('keydown', (event) => {
        this._onKeDown(event)    
    }, false);
}

Keyboard.prototype.__proto__ = Events.prototype;

Keyboard.prototype._onKeDown = function(event) {
    console.log(event)
    switch(event.code) {
        case 'Digit1':
        case 'Digit2':
        case 'Digit3':
        case 'Digit4':
        case 'Digit5':
        case 'Digit6':
        case 'Digit7':
        case 'Digit8':
        case 'Digit9':
        case 'Digit0':
            this.emit('digit', parseInt(event.key));
            break;            
    }
}


export { Keyboard }