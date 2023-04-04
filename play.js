const PS = [0, 0, 0, 0];

const songsR = JSON.parse(localStorage.getItem('data'));
console.log(songsR);
const songs = JSON.parse(localStorage.getItem('songs'));
console.log(songs);

let index = 0;
let currSong = songsR[index][0];

window.onload = function() {
  const songDisplay = document.getElementById("songDisplay");
  songDisplay.textContent = currSong;
};

//checks if player guessed correctly
function getCheckedRadioIndex(player) {
  const radioButtons = document.getElementsByName(player);
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return i + 1;
    }
  }
  return null;
}

function endRound() {
  const playerNames = ['player1', 'player2', 'player3', 'player4'];
  let playerVotes = playerNames.map(getCheckedRadioIndex);

  playerVotes.forEach((vote, i) => {
    if (vote === songsR[index][1]) {
      PS[i]++;
    }
  });

  console.log(PS);
  index++;
  if (index < songsR.length) {
    currSong = songsR[index][0];
    document.getElementById("songDisplay").textContent = currSong;
    localStorage.setItem('PS', JSON.stringify(PS));
  } else {
    localStorage.setItem('PS', JSON.stringify(PS));
    window.location.href = "/results.html";
  }
}
