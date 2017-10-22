var Audio = new Media("media/ka-ching.mp3");
var index = 0;

if (cordova) {
	document.addEventListener("deviceready", function() {
		shake.startWatch(function() {
			Audio.play();
			alert('kocok erus');

			document.getElementById('shake').innerHTML = index;
			index++;
		}, 30);
	}, false);
} else {
	alert('cordova ERR');
}