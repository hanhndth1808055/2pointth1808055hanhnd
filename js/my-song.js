var token = localStorage.getItem('token-key');
if (token == null || token.length == 0) {
    alert('Please log in to listen to your uploaded songs!');
    location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', function () {
    loadSong();
});

function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}

function loadSong() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Everything is O.K');
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < arraySongs.length; i++) {
                var song = arraySongs[i];
                htmlContent += '<div class="song-item">';
                htmlContent += '<div class="song-index">' + (i + 1) + '</div>';
                htmlContent += '<div class="song-thumbnail">';
                htmlContent += '<img src="' + song.thumbnail + '" alt="song-thumbnail">';
                htmlContent += '</div>';
                htmlContent += '<div class="song-infor">';
                htmlContent += '<div class="song-name">' + song.name + '</div>';
                htmlContent += '<div class="song-singer">' + song.singer + '</div>';
                htmlContent += '</div>';
                htmlContent += '<div class="song-control" onclick="playSong(\'' + song.link + '\')">Play</div>';
                htmlContent += `<div class="song-control" onclick="playSong('${song.link}')">Play</div>`;
                htmlContent += '<div class="song-control" onclick="playSong"></div>';
                htmlContent += '<div class="song-detail"><a href="#">Detail</a></div>';
                htmlContent += '</div>';
            }
            document.getElementById("list-song").innerHTML += htmlContent;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-mine', true);
    xhr.setRequestHeader('Authorization', 'Basic ' + token);
    xhr.send();
}
