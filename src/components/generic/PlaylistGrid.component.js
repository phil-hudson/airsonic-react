import React from "react";
import PlaylistWithArtworkComponent from './PlaylistWithArtwork.component';
import '../../css/_font.scss';
import '../../css/_shared.scss';

type Props = {
    playlists: [Object]
};
const PlaylistGrid = (props: Props) => {
    const playlists = props.playlists.filter((album) => album.hasOwnProperty('coverArt'));
    return (
        <div>
            <h2 className='main-title'>Playlists</h2>

            <div className='tile-contents'>
                {
                    playlists.map((playlist) => {
                            return <PlaylistWithArtworkComponent name={playlist.name} artworkID={playlist.coverArt}
                                                                 id={playlist.id}/>
                        }
                    )
                }
            </div>
        </div>);

}
export default PlaylistGrid;