import React, {useState, useEffect} from "react";
import UpNextPlaylist from "../generic/UpNextPlaylist.component";
import {connect} from 'react-redux'
import AudioPlayer from "../generic/AudioPlayer.component";
import {ArrowDropDownOutlined, ArrowDropUpOutlined} from '@material-ui/icons';

function mapStateToProps(state) {
    return {
        trackList: state.playerReducer.trackList,
    }
}

const Player = (props) => {
    return (
        // TODO move to class
        <div style={{
            height: props.toggled ? '100%' : '',
            bottom: 0,
            position: 'fixed',
            width: '100%',
            paddingTop: props.toggled ? '66px' : '',
            marginLeft: '160px',
            backgroundColor: '#212527',
            color: 'white'
        }}>
            <ArrowDropDownOutlined className='pointer' onClick={() => props.setPlayerToggled(false)}/>
            <ArrowDropUpOutlined className='pointer' onClick={() => props.setPlayerToggled(true)}/>
            <AudioPlayer/>
            <UpNextPlaylist/>
        </div>
    );

}

export default connect(mapStateToProps)(Player);
