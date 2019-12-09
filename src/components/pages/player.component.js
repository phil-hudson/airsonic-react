import React, {useState, useEffect} from "react";
import UpNextPlaylist from "../generic/UpNextPlaylist.component";
import {connect} from 'react-redux'
import AudioPlayer from "../generic/AudioPlayer.component";


function mapStateToProps(state) {
    return {
        trackList: state.trackList,
    }
}

const Player = (props) => {

    return (
        <div  style={{marginTop: 'auto'}}>
                <AudioPlayer/>
                <UpNextPlaylist/>
        </div>
    );

}

export default connect(mapStateToProps)(Player);
