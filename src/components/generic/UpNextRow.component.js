import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import {removeTrackAtPlaylistIndex, setCurrentTrack} from '../../actions/player.actions'
import {bindActionCreators} from 'redux'
import {DeleteOutline, PlayCircleOutline} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import '../../css/up-next.scss'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeTrackAtPlaylistIndex, setCurrentTrack}, dispatch)
}

const UpNextRow = ({track, index, removeTrackAtPlaylistIndex, setCurrentTrack}) => {
    return (
        <div className='upNextRowContainer' key={index}>
            <DeleteOutline style={{paddingRight: 12, cursor: 'pointer'}}
                              onClick={() => removeTrackAtPlaylistIndex(index)}/>
            <PlayCircleOutline style={{paddingRight: 12, cursor: 'pointer'}}
                           onClick={() => setCurrentTrack(index)}/>
            <span style={{fontSize: 12, paddingRight: 12, flex: 1}}>{track.title} - {track.artistId ? (
                <Link to={'/artist/' + track.artistId}>{track.artist}</Link>) : (<span>{track.artist}</span>)} </span>
        </div>);
}

export default connect(null, mapDispatchToProps)(UpNextRow);