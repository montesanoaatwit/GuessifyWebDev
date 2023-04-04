const songs = JSON.parse(localStorage.getItem('songs'));
const PS = JSON.parse(localStorage.getItem('PS'));


window.onload = function() {
    const p1Song = document.getElementById("p1Song");
    const p2Song = document.getElementById("p2Song");
    const p3Song = document.getElementById("p3Song");
    const p4Song = document.getElementById("p4Song");

    const p1Score = document.getElementById("p1Score");
    const p2Score = document.getElementById("p2Score");
    const p3Score = document.getElementById("p3Score");
    const p4Score = document.getElementById("p4Score");
    
    //these are always displayed out of order for some reason, and there's no consistency
    p1Song.textContent = songs[0];
    p2Song.textContent = songs[1];
    p3Song.textContent = songs[2];
    p4Song.textContent = songs[3];

    p1Score.textContent = PS[0];
    p2Score.textContent = PS[1];
    p3Score.textContent = PS[2];
    p4Score.textContent = PS[3];
}