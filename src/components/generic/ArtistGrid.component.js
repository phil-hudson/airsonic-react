import React, {useState, useEffect} from "react";
import ArtistWithArtworkComponent from './ArtistWithArtwork.component';

type Props = {
    artists: [Object]
};
const ArtistGrid = (props: Props) => {
    const artists = props.artists.filter((album) => album.hasOwnProperty('coverArt'));
    return (
        <div style={{'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'row', 'alignItems': 'center'}}>            {
            artists.map((artist) => {

                    return <ArtistWithArtworkComponent name={artist.name} artworkID={artist.coverArt} id={artist.id}/>
                }
            )

        }
        </div>);
}
export default ArtistGrid;