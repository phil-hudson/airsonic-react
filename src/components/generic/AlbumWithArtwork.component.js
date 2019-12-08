// @flow
import * as React from 'react';
import APIServiceUtil from '../../services/APIServiceUtil';
import {Link} from 'react-router-dom';
import '../../css/album.scss'
import '../../css/font.scss'

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
        <div className='albumContainer'>
            <Link to={'/album/' + props.id}>
            <img height='160px' width='160px' src={coverArtURI}/>
            <div style={{height: '80px', margin: '8px'}}>
                <p className={'truncate'} style={{fontSize: '14px'}}>{props.title}</p>
                <p className={'truncate'} style={{fontSize: '12px'}}>{props.artist}</p>
            </div>
            </Link>
        </div>
    );
};