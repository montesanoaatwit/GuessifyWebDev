function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  

const songs = [];
const songCount = 0;
const songID = 1;

function addSong() {
  const song = document.getElementById("PLACEHOLDER").value;
  
  songCount++;
  songs.push([song, songID]);

  if(songCount % 2 == 0){
    songID++;
  }

  if(songCount == 8) {
    location.href="Play.html"
  }

}

if (songs.length < 8) {
    const songsR = shuffleArray(songs);
}
