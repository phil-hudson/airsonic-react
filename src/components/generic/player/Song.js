import React from 'react';

function Song(props) {
  const { songName, songArtist } = props;
  
  return (
    <div className="song">
      <p className="song__title">{songName}</p>
      <p className="song__artist">{songArtist}</p>
    </div>
  )
}

export default Song;