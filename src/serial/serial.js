import { Events } from '../events/events.js'

const Serial = function() {

}

Serial.prototype.__proto__ = Events.prototype;

export { Serial }