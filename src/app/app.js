
import { Serial } from '../serial/serial.js';
import { Telemetry } from '../telemetry/telemetry.js';
import { Camera } from '../camera/camera.js';
import { Map } from '../map/map.js';
import { Joystick } from '../joystick/joystick.js';

const App = function() {
    this._serial = new Serial();
    this._telemetry = new Telemetry();
    this._camera = new Camera();
    this._map = new Map();
    this._joystick = new Joystick();
    
    this._init();
}

App.prototype._init = function() {
    this._serial.on('connect', () => {
        console.info('Serial is connected')
    });
/*
    document.body.requestFullscreen((e)=>{
        console.log(e)
    });
*/
}

export { App }