const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const songProgress = document.getElementById('song-progress');

playButton.addEventListener('click', function() {
	// code to start playing song
});

pauseButton.addEventListener('click', function() {
	// code to pause song
});

// code to update song progress bar every second
setInterval(function() {
	// get current progress of song (in seconds)
	const currentProgress = 30; // replace with actual value
	
	// get total length of song (in seconds)
	const totalLength = 180; // replace with actual value
	
	// calculate percentage of song that has been played
	const percentagePlayed = (currentProgress / totalLength) * 100;
	
	// update width of song progress bar
	songProgress.style.width = percentagePlayed + '%';
}, 1000);
