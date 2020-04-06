import React from "react";
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
            <div id='playerWrapper' style={{
                height: props.toggled ? '100%' : '210px',
            }}>
                {props.toggled ? (
                    <ArrowDropDownOutlined className='pointer' onClick={() => props.setPlayerToggled(false)}/>

                ) : (
                    <ArrowDropUpOutlined className='pointer' onClick={() => props.setPlayerToggled(true)}/>

                )}
                <AudioPlayer/>
            <UpNextPlaylist/>
        </div>

    );

}

export default connect(mapStateToProps)(Player);
