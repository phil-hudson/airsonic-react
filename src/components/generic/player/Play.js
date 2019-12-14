import React from "react";
import {PlayCircleFilled} from "@material-ui/icons";
import {bindActionCreators} from "redux";
import {play} from "../../../actions/player.actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({play}, dispatch)
}

function Play(props) {

    return (
        <button className="player__button" onClick={() => {
            props.play() }}>
            <PlayCircleFilled />
        </button>
    );
}
export default connect(null, mapDispatchToProps)(Play);