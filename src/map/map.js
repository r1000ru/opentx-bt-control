const Map = function() {
    this._map = new mapboxgl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=dI7iD5yV5PRVizHgs6k1',
        center: [42.34007, 56.92274],
        zoom: 7.47
    });

    this._pilot_marker = new mapboxgl.Marker();
    this._plane_marker = new mapboxgl.Marker({ color: '#ff0000'});
    
    this._pilot_watcher = navigator.geolocation.watchPosition((position)=>{
        this._onPilotPosition(position);
    }, (e)=>{
        console.info(e)
    }, {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
    });
}

Map.prototype._init = function() {

}

Map.prototype._onPilotPosition = function(position) {
    if (!position.coords) {
        return
    }

    this._pilot_marker.setLngLat([position.coords.longitude, position.coords.latitude]);
    this._pilot_marker.addTo(this._map);

    let plane_coords = this._plane_marker.getLngLat();
    if (!plane_coords) {
        this.setPlaneCoords(position.coords.longitude, position.coords.latitude)
    }
}

Map.prototype.setPlaneCoords = function(longitude, latitude) {
    this._plane_marker.setLngLat([longitude + 0.0001, latitude + 0.0001]);
    this._plane_marker.addTo(this._map);
    this._map.fitBounds([this._pilot_marker.getLngLat(), this._plane_marker.getLngLat()], {
        padding: {top: 50, bottom:50, left: 50, right: 50}
    });
}
export {Map}