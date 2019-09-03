const Camera = function(){
    this._el = document.getElementById('camera');
    this._stream = null
    this._init();
}

Camera.prototype._init = function() {
    navigator.mediaDevices.getUserMedia({ video:true })
        .then((stream) => {
            console.log(stream)
            this._el.srcObject = stream;
        })
        .catch((err)=>{
            console.err('Access to camera is denied', err)
        });
    
}

export { Camera }