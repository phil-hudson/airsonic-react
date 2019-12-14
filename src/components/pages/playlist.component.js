import React, {useEffect, useState} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import TrackList from '../generic/TrackList.component';
import {connect} from 'react-redux';
import {addTracks} from '../../actions/player.actions'
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTracks}, dispatch)
}

const Playlist = (props) => {

    const [playlist, setPlaylist] = useState([]);
    const [tracks, setTracks] = useState([]);

    const getPlaylist = (id) => {
        fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getPlaylist?id=' + id), {
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
                    setPlaylist(data['subsonic-response']['playlist']);
                    setTracks(data['subsonic-response']['playlist']['entry']);
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        getPlaylist(props.match.params.id);
    }, []);

    return (
        <div>
            {
                playlist !== null && (
                    <div>
                        <div style={{
                            'display': 'flex',
                            'flexWrap': 'wrap',
                            'flexDirection': 'row',
                            'alignItems': 'start',
                        }}>
                            <img height='160px' width='160px' src={APIServiceUtil.augmentAirsonicAPI('/rest/getCoverArt?size=320&id=' + playlist.coverArt)}/>
                            <div style={{textAlign: 'left', margin: '8px', flex: 1}}>
                                <h2 style={{}}>{playlist.name}</h2>
                                <button className="btn btn-outline-info bg-white" about='Add album to playlist' type="submit" onClick={e => {
                                    e.preventDefault();
                                    props.addTracks(tracks)
                                }}>+</button>
                            </div>
                        </div>
                        <TrackList tracks={tracks}/>
                    </div>
                )
            }

        </div>
    );

}

export default connect(null, mapDispatchToProps)(Playlist);
