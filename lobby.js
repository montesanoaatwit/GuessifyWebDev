function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let songs = [];
let songCount = 0;
let songIDNum = 1;
function addSong() {
  const input = document.getElementById("songInput");
  let song = input.value.trim();

  if (!song) {
    return;
  }

  let songID = songCount+1;
  //removed "Math.floor(songCount / 2) + 1" to get score to display properly

  songs.push([song, songID]);
  //deleted ", songID" from this array bc it wasn't used elsewhere and just messed w results screen
  console.log(song);

  songCount++;
  songIDNum++;

  input.value = "";
  if (songs.length === 4) {
    localStorage.setItem('songs', JSON.stringify(songs));
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
