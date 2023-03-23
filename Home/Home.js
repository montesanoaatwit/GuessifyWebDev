const loginBtn = document.getElementById('login-button');
const clientId = '1b6af36463984cbf84278735a8ddc4c3';
const redirectUri = encodeURIComponent('http://127.0.0.1:3000/Lobby/Lobby.html');
const scope = encodeURIComponent('user-read-private');

const authEndpoint = 'https://accounts.spotify.com/authorize';
const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;

loginBtn.addEventListener('click', () => {
    window.location.href = authUrl;
});
