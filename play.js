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
  const playerV = [('input[name=player1]:checked's).val(),  ('input[name=player2]:checked').val(),  ('input[name=player3]:checked').val(),  ('input[name=player4]:checked').val()]

	for (let i = 1; i <= 4; i++) {
    if(playerV[i] == songsR[index][1]){
      PS[i]++;
    }
  }
  
  index++;

}