import React from "react";
import PlaylistWithArtworkComponent from './PlaylistWithArtwork.component';

type Props = {
    playlists: [Object]
};
const PlaylistGrid = (props: Props) => {
    const playlists = props.playlists.filter((album) => album.hasOwnProperty('coverArt'));
    return (
        <div>
            <h2>Playlists</h2>


        <div style={{'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'row', 'alignItems': 'center'}}>
            {
            playlists.map((playlist) => {

                    return <PlaylistWithArtworkComponent name={playlist.name} artworkID={playlist.coverArt} id={playlist.id}/>
                }
            )

        }
        </div>
        </div>);

}
export default PlaylistGrid;