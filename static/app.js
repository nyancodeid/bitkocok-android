
var Global = {
	inc: 0
}
var Audio = new Media('file://' + Function.getPath() + "media/ka-ching.mp3");
var Events = {
	onDeviceReady: function() {
		shake.startWatch(Events.onShake, 30);
	},
	onShake: function() {
		Audio.play();
		Global.inc++;

		document.getElementById('shake').textContent = Global.inc;
	}
}
var Function = {
	getPath: function() {
		var path = window.location.pathname;
		path = path.substr( path, path.length - 10 );
		
		return path;
	}
}

document.addEventListener('deviceready', Events.onDeviceReady, false);
