import React from "react";
import {connect} from 'react-redux'
import {removeTrackAtPlaylistIndex, setCurrentTrack} from '../../actions/player.actions'
import {bindActionCreators} from 'redux'
import {DeleteOutline, PlayCircleOutline} from '@material-ui/icons';
import '../../css/up-next.scss'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeTrackAtPlaylistIndex, setCurrentTrack}, dispatch)
}

const UpNextRow = ({track, index, isPlaying, removeTrackAtPlaylistIndex, setCurrentTrack}) => {
    return (
        <div className='upNextRowContainer' key={index}>
            <span>{index}. </span>
            {isPlaying && (
                <PlayCircleOutline style={{paddingRight: 12}}/>
            )}
            <DeleteOutline style={{paddingRight: 12, cursor: 'pointer'}}
                           onClick={() => removeTrackAtPlaylistIndex(index)}/>
            <span onClick={() => setCurrentTrack(index)}
                  style={{ paddingRight: 12, flex: 1, cursor: 'pointer'}}
                  about='Play now'>{track.title} - {track.artist}</span>
        </div>);
}

export default connect(null, mapDispatchToProps)(UpNextRow);