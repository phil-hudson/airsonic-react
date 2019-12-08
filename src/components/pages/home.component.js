import React, {useState, useEffect} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavTop from './navbar.component';
import AlbumGrid from '../generic/AlbumGrid.component';
import SideNav from './sidenav.component';

const Home = () => {

    const [randomAlbums, setRandomAlbums] = useState([]);

    const getRandomAlbums = (server, username, token, salt) => {
        fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getAlbumList2?type=random'), {
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
                    setRandomAlbums(data['subsonic-response']['albumList2']['album']);
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        getRandomAlbums();
    }, []);

    return (
        <div>

                {
                    randomAlbums.length > 0 ? (
                        <AlbumGrid albums={randomAlbums}/>
                    ) : (
                        <p>no songs</p>
                    )
                }
        </div>
    );

}

export default Home