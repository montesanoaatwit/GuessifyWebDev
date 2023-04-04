
function shuffleArray(array) {  //used to shuffle songs
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let songs = [];
let songCount = 0;

function addSong() { //adds input song to DB
  const input = document.getElementById("songInput");
  let song = input.value.trim();

  if (!song) {
    return;
  }

  let songID = songCount+1;

  songs.push([song, songID]);
  console.log(song);

  songCount++;


  input.value = "";
  if (songs.length === 4) { //if 4 songs have been input, the data is sent to the database and the user is redirected to the next page
    localStorage.setItem('songs', JSON.stringify(songs)); //this is placed before the rest of the stuff bc oit gets randomized otherwise
    const shuffledSongs = shuffleArray(songs);
    console.log(shuffledSongs);

    localStorage.setItem('data', JSON.stringify(shuffledSongs));
    
    window.location.href = "/play.html";
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevents submitting the form unintentionally
    addSong();
  }
}

document.getElementById("songInput").addEventListener("keypress", handleKeyPress);
