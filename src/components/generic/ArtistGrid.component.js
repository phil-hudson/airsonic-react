import React from "react";
import ArtistWithArtworkComponent from './ArtistWithArtwork.component';
import '../../css/_shared.scss';

type Props = {
    artists: [Object]
};
const ArtistGrid = (props: Props) => {
    const artists = props.artists.filter((album) => album.hasOwnProperty('coverArt'));
    return (
        <div className='tile-contents'>            {
            artists.map((artist) => {

                    return <ArtistWithArtworkComponent name={artist.name} artworkID={artist.coverArt} id={artist.id}/>
                }
            )

        }
        </div>);
}
export default ArtistGrid;