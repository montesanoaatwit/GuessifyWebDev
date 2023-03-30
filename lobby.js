function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let songs = [];
let songCount = 0;
let songID = 1;

function addSong() {
  const input = document.getElementById("songInput");
  let song = input.value;
  
  if (songCount < 2) {
    songID = 1;
  } else if (songCount < 4) {
    songID = 2;
  } else if (songCount < 6) {
    songID = 3;
  } else if (songCount < 8) {
    songID = 4;
  } else {
    // do nothing
  }

  songs.push([song, songID]);
  console.log(song);

  songCount++;

  input.value = ""
  if (songs.length == 8) {
    const songsR = shuffleArray(songs);
    console.log(songsR);

    localStorage.setItem('data', JSON.stringify(songsR))
    console.log(songsR)
  
    window.location.href = "/play.html";
  }
  
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addSong();
  }
}

document.getElementById("songInput").addEventListener("keypress", handleKeyPress);

