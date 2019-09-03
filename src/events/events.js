const Events = function() {
    this._events_callbacks = {};
}

Events.prototype.on = function(event, callback) {
    if (!event || !callback || typeof(callback) !== 'function') {
        return;
    }
    this._events_callbacks = this._events_callbacks || {};
    this._events_callbacks[event] = callback;
}

Events.prototype.emit = function(event, data) {
    if (!this._events_callbacks || !this._events_callbacks[event]) {
        return;
    }
    
    return this._events_callbacks[arguments[0]].apply(null, Array.prototype.slice.call(arguments, 1));
}

Events.prototype.event = function(event) {
    if (!this._events_callbacks || !this._events_callbacks[event]) {
        return
    }
    return this._events_callbacks[event];
}

export { Events }