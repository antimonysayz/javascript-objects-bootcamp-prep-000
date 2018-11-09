var playlist = {"Artist Name":"Song Title"};

function updatePlaylist(playlist, artistName, songTitle) {
  
  return Object.assign({},playlist,{[artistName]:songTitle})
  
}