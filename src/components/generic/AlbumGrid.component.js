import React from "react";
import AlbumWithArtworkComponent from './AlbumWithArtwork.component';

type Props = {
    albums: [Object]
};
const AlbumGrid = (props: Props) => {
    const albums = props.albums.filter((album) => album.hasOwnProperty('coverArt'));
    return (
        <div style={{'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'row', 'alignItems': 'center'}}>            {
            albums.map((album) => {

                    return <AlbumWithArtworkComponent artist={album.artist} title={album.name} artworkID={album.coverArt} id={album.id}/>
                }
            )

        }
        </div>);
}
export default AlbumGrid;