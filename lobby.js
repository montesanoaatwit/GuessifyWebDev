function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let songs = [];
let songCount = 0;

function addSong() {
  const input = document.getElementById("songInput");
  let song = input.value.trim();

  if (!song) {
    return;
  }

  let songID = Math.floor(songCount / 2) + 1;
  songs.push([song, songID]);
  console.log(song);

  songCount++;

  input.value = "";
  if (songs.length === 4) {
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
