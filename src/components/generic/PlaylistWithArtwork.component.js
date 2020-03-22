// @flow
import * as React from 'react';
import APIServiceUtil from '../../services/APIServiceUtil';
import {Link} from 'react-router-dom';
import '../../css/album.scss'
import '../../css/_font.scss'

// TODO change to playlist payload type
type Props = {
    id: string,
    name: string,
    artworkID: ?string,
};

export default function PlaylistWithArtworkComponent(props: Props) {
    const coverArtURI = APIServiceUtil.augmentAirsonicAPI('/rest/getCoverArt?size=320&id=' + props.artworkID);
    return (
        <div className='albumContainer'>
            <Link to={'/playlist/' + props.id}>
            <img height='160px' width='160px' src={coverArtURI}/>
            <div style={{height: '80px', margin: '8px'}}>
                <p className={'truncate'} style={{fontSize: '14px'}}>{props.name}</p>
            </div>
            </Link>
        </div>
    );
};