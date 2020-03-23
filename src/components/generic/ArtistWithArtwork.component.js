// @flow
import * as React from 'react';
import APIServiceUtil from '../../services/APIServiceUtil';
import {Link} from 'react-router-dom';
import '../../css/album.scss'
import '../../css/_font.scss'

// TODO change to artist payload type
type Props = {
    id: string,
    name: string,
    artworkID: ?string,
};

export default function AlbumWithArtworkComponent(props: Props) {
    const coverArtURI = APIServiceUtil.augmentAirsonicAPI('/rest/getCoverArt?size=320&id=' + props.artworkID);
    return (
        <div className='album-container'>
            <Link to={'/artist/' + props.id}>
            <img height='160px' width='160px' src={coverArtURI}/>
            <div className={'album-detail'}>
                <p className={'truncate album-main'} style={{fontSize: '14px'}}>{props.name}</p>
            </div>
            </Link>
        </div>
    );
};