PS = [0, 0, 0, 0];

const songsR = JSON.parse(localStorage.getItem('data'))
console.log(songsR)

let index = 0;
currSong = songsR[index][0];

window.onload = function() {
  const songDisplay = document.getElementById("songDisplay");
  songDisplay.textContent = currSong;
};

function endRound() {
  const playerz = [document.getElementsByName('player1'), document.getElementsByName('player2'), document.getElementsByName('player3'), document.getElementsByName('player4')];
  let playerV = [0, 0, 0, 0];
  count = 0;

  for (let item of playerz) {
    for (let i = 0; i < item.length; i++) {
      if (item[i].checked) {
        playerV[count] = i;
        break;
      }
    }

    count++;
  }

  for (let i = 0 ; i < 4; i++) {
    console.log("player" + playerV[i] + "song " + songsR[index])
    if(playerV[i] == songsR[index][1]) {
      PS[i]++;
    }
  }

  console.log(PS);
  index++;
  songDisplay.textContent = songsR[index]
}