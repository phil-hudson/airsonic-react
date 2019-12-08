import React, {useState, useEffect} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavTop from './navbar.component';
import AlbumGrid from '../generic/AlbumGrid.component';
import SideNav from './sidenav.component';

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
                <h2>{artist.name}</h2>
            )}
            <span />
            {
                albums.length > 0 ? (
                    <div>
                    <h3>Albums</h3>
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