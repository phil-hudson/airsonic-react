// @flow
import * as React from 'react';
import APIServiceUtil from '../../services/APIServiceUtil';
import {Link} from 'react-router-dom';
import '../../css/album.scss'
import '../../css/_font.scss'

// TODO change to song payload type
type Props = {
    id: string,
    title: string,
    artist: string,
    artworkID: ?string,
};

export default function AlbumWithArtworkComponent(props: Props) {
    const coverArtURI = APIServiceUtil.augmentAirsonicAPI('/rest/getCoverArt?size=320&id=' + props.artworkID);
    return (
        <div className='album-container'>
            <Link to={'/album/' + props.id}>
            <img height='160px' width='160px' src={coverArtURI}/>
            <div className='album-details'>
                <p className={'truncate album-main'}>{props.title}</p>
                <p className={'truncate album-sub'}>{props.artist}</p>
            </div>
            </Link>
        </div>
    );
};