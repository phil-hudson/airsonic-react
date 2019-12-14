import React from "react";
import {PauseCircleFilled} from "@material-ui/icons";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {pause} from "../../../actions/player.actions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({pause}, dispatch)
}

function Pause(props) {

  return (
    <button className="player__button" onClick={() => {
        props.pause();
    }}>
      <PauseCircleFilled />
    </button>
  );
}
export default connect(null, mapDispatchToProps)(Pause);
