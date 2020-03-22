import React from "react";
import {connect} from 'react-redux'
import {addTrack} from '../../actions/player.actions'
import {bindActionCreators} from 'redux'
import {AddCircleOutline} from "@material-ui/icons";
import '../../css/track.row.scss';
import {Link} from 'react-router-dom';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTrack}, dispatch)
}

const TrackRow = ({track, addTrack}) => {
    return (
        <div className='trackRowContainer'>
            <AddCircleOutline style={{paddingRight: 12, cursor: 'pointer'}} onClick={() => addTrack(track)}/>
            <span style={{fontSize: 12, paddingRight: 12, flex: 1}}>{track.title} - {track.artistId ? (
                <Link to={'/artist/' + track.artistId}>{track.artist}</Link>) : (<span>{track.artist}</span>)} </span>
        </div>);
};

export default connect(null, mapDispatchToProps)(TrackRow);