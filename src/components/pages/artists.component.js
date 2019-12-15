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
                // TODO move to proper component
                // TODO add filtering
                artists.length > 0 ? (
                    <div>
                    <h3>Artists</h3>
                        {
                            artists.map((index) => {
                                    return (
                                        <div>
                                            <p>{index.name}</p>
                                            {
                                                index.artist.map((artist) => {
                                                    return <Link to={'/artist/' + artist.id}>{artist.name}</Link>;
                                                })
                                            }
                                        </div>
                                )
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