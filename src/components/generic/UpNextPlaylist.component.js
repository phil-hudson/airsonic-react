import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {removeTrackAtPlaylistIndex, clearPlaylist} from '../../actions/player.actions'
import UpNextRow from './UpNextRow.component';

function mapStateToProps(state) {
    return {
        trackList: state.trackList,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeTrackAtPlaylistIndex, clearPlaylist}, dispatch)
}

const UpNextPlaylist = (props) => {

    return (
        <div>
            <p>Up next</p>
            <button className="btn btn-outline-info bg-white" type="submit" onClick={e => {
                e.preventDefault();
                props.clearPlaylist()
            }}>Clear playlist
            </button>
            <div style={{textAlign: 'left'}}>
                {props.trackList.map((track, index) =>
                    <UpNextRow track={track} index={index} key={index}/>
                )}
            </div>
        </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(UpNextPlaylist);
