import React, {useEffect, useState} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import {Link} from "react-router-dom";

const Artists = (props) => {
    const [artists, setArtists] = useState({});

    const getArtists = (id) => {
        fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getArtists'), {
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
                    setArtists(data['subsonic-response']['artists']['index']);
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        getArtists();
    }, []);

    return (
        <div>
            {
                artists.length > 0 ? (
                    <div>
                    <h3>Artists</h3>
                        {
                            artists.map((artistIndex) => {
                                return artistIndex.artist.map((artist) => {
                                    return <Link to={'/artist/' + artist.id}>{artist.name}</Link>;
                                });
                            })
                        }
                    </div>
                ) : (
                    <p>No artists</p>
                )
            }
        </div>
    );

}

export default Artists