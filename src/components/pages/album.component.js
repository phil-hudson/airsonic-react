import React, {useEffect, useState} from "react";
import APIServiceUtil from '../../services/APIServiceUtil';
import TrackList from '../generic/TrackList.component';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTracks} from '../../actions/player.actions'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTracks}, dispatch)
}

const Album = (props) => {
    const [album, setAlbum] = useState([]);
    const [albumTracks, setAlbumTracks] = useState([]);

    const getAlbum = (id) => {
        fetch(APIServiceUtil.augmentAirsonicAPI('/rest/getAlbum?id=' + id), {
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
                    setAlbum(data['subsonic-response']['album']);
                    setAlbumTracks(data['subsonic-response']['album']['song']);
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    useEffect(() => {
        getAlbum(props.match.params.id);
    }, []);
    return (
        <div style={{
            display:'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'}}>
            {
                album !== null ? (
                    <div>
                    <div style={{
                        'display': 'flex',
                        'flexWrap': 'wrap',
                        'flexDirection': 'row',
                        'alignItems': 'start',
                    }}>
                        <img height='160px' width='160px' src={APIServiceUtil.augmentAirsonicAPI('/rest/getCoverArt?size=320&id=' + album.coverArt)}/>
                        <div style={{textAlign: 'left', margin: '8px', flex: 1}}>
                            <h2 style={{}}>{album.name}</h2>
                            <h3 style={{}}>{album.artist}</h3>
                            <button className="btn btn-outline-info bg-white" about='Add album to playlist' type="submit" onClick={e => {
                                e.preventDefault();
                                props.addTracks(albumTracks)
                            }}>+</button>
                        </div>
                    </div>
                    <TrackList tracks={albumTracks}/>
                    </div>

                ) : (
                    <p style={{padding: '100px'}}>no album</p>
                )
            }

        </div>
    );

}

export default connect(null, mapDispatchToProps)(Album);
