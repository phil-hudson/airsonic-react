import React, {useEffect, useState} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import AlbumGrid from '../generic/AlbumGrid.component';
import '../../css/_font.scss';

const Artist = (props) => {
    const [artist, setArtist] = useState([]);
    const [albums, setAlbums] = useState([]);

    const getArtist = (id) => {
        fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getArtist?id=' + id), {
            crossDomain: true,
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                // this.setState({ contacts: data })
                console.log('success');
                console.log(data);
                if (data['subsonic-response']['status'] === 'ok') {
                    // store songs
                    setArtist(data['subsonic-response']['artist']);
                    setAlbums(data['subsonic-response']['artist']['album']);
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        getArtist(props.match.params.id);
    }, []);

    return (
        <div>
            { artist!== null && (
                <h2 className={'main-title'}>{artist.name}</h2>
            )}
            <span />
            {
                albums.length > 0 ? (
                    <div>
                    <h3 className={'main-title'}>Albums</h3>
                    <AlbumGrid albums={albums}/>
                    </div>
                ) : (
                    <p>No Albums</p>
                )
            }
        </div>
    );

}

export default Artist