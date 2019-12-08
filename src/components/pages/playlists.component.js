import React, {useState, useEffect} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavTop from './navbar.component';
import AlbumGrid from '../generic/AlbumGrid.component';
import SideNav from './sidenav.component';
import PlaylistGrid from '../generic/PlaylistGrid.component';

const Playlists = () => {

    const [playlists, setPlaylists] = useState([]);

    const getPlaylists = () => {
        fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getPlaylists'), {
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
                    setPlaylists(data['subsonic-response']['playlists']['playlist']);
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        getPlaylists();
    }, []);

    return (
        <div>

                {
                    playlists.length > 0 ? (
                        <PlaylistGrid playlists={playlists}/>
                    ) : (
                        <p>no playlists</p>
                    )
                }
        </div>
    );

}

export default Playlists