var playlist = {"Artist Name":"Song Title"};

function updatePlaylist(playlist, artistName, songTitle) {
  
  playlist[artistName] = songTitle
  
  return playlist
  
}

function removeFromPlaylist()