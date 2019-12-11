import React, {useState, useEffect} from "react";
import UpNextPlaylist from "../generic/UpNextPlaylist.component";
import {connect} from 'react-redux'
import AudioPlayer from "../generic/AudioPlayer.component";
import {ArrowDropDownOutlined, ArrowDropUpOutlined} from '@material-ui/icons';


function mapStateToProps(state) {
    return {
        trackList: state.trackList,
    }
}

const Player = (props) => {

    return (
        <div  style={{marginTop: 'auto', marginLeft: '160px', height:'100%', backgroundColor: '#212527', color: 'white'}}>
            <ArrowDropDownOutlined className='pointer' onClick={() => props.setPlayerToggled(false)}/>
            <ArrowDropUpOutlined className='pointer' onClick={() => props.setPlayerToggled(true)}/>
            <AudioPlayer/>
            <UpNextPlaylist/>
        </div>
    );

}

export default connect(mapStateToProps)(Player);
