import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {removeTrackAtPlaylistIndex, clearPlaylist} from '../../actions/player.actions'
import UpNextRow from './UpNextRow.component';
import {ArrowDropDownOutlined, ArrowDropUpOutlined, Clear} from "@material-ui/icons";

function mapStateToProps(state) {
    return {
        trackList: state.playerReducer.trackList,
        currentTrack: state.playerReducer.currentTrack,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeTrackAtPlaylistIndex, clearPlaylist}, dispatch)
}

const UpNextPlaylist = (props) => {
    const [isShown, setIsShown] = useState(true);
    return (
        <div className={'up-next-container'}>
            <h2>Up next</h2>
            {
                isShown ? (
                    <div>
                        <ArrowDropUpOutlined className='pointer' onClick={() => setIsShown(false)}/>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                                {props.trackList.length > 0 ? (
                                    <div>
                                        <div className={'pointer'} onClick={() => props.clearPlaylist()}>
                                            <Clear style={{paddingRight: '12px'}}/>
                                            <span>Clear up next</span>
                                        </div>
                                        {props.trackList.map((track, index) =>
                                            <UpNextRow track={track} index={index} key={index}
                                                       isPlaying={props.currentTrack === index}/>
                                        )}
                                    </div>
                                ) : (
                                    <p>No tracks in up next</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <ArrowDropDownOutlined className='pointer' onClick={() => setIsShown(true)}/>
                    </div>
                )
            }
        </div>
    );

};

export default connect(mapStateToProps, mapDispatchToProps)(UpNextPlaylist);
