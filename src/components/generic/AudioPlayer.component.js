import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {setCurrentTrack, setElapsedTime, removeTrackAtPlaylistIndex} from '../../actions/player.actions'
import PlayingStateEnum from '../../enums/PlayingState.enum';
import Pause from "./player/Pause";
import Play from "./player/Play";
import Song from "./player/Song";
import Bar from "./player/Bar";
import APIServiceUtil from "../../services/APIServiceUtil";
import {Link} from 'react-router-dom';

function mapStateToProps(state) {
    return {
        trackList: state.trackList,
        currentTrack: state.currentTrack,
        elapsedTime: state.elapsedTime,
        playingState: state.playingState,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setElapsedTime, setCurrentTrack, removeTrackAtPlaylistIndex}, dispatch)
}

const AudioPlayer = (props) => {
    const [clickedTime, setClickedTime] = useState(null);

    // main effect
    useEffect(() => {
        //TODO tidy up and remove after testing
        console.log('effect line 30 audio player called');
        if (props.trackList.length === 0) {
            console.warn('track list empty cannot play')
            return;
        }
        const audio = document.getElementById("audio");

        // TODO fix this, it keeps jumping back to 0
        if (clickedTime !== null) {
            console.log(clickedTime)
            audio.oncanplay = function() {
                audio.currentTime = clickedTime;
            };
            setClickedTime(null);
            return () => {};
        }

        audio.src = APIServiceUtil.augmentAirsonicAPI('/rest/stream?id=' + props.trackList[props.currentTrack].id);
        audio.preload = 'auto';

        // state setters wrappers
        const setAudioTime = () => props.setElapsedTime(audio.currentTime);

        const handleEnded = () => {
            console.log('ended');
            props.removeTrackAtPlaylistIndex(props.currentTrack);
            setAudioTime(0);
        };

        // DOM listeners: update React state on DOM events
        audio.addEventListener("loadeddata", setAudioTime);
        audio.addEventListener("timeupdate", setAudioTime);
        audio.addEventListener("ended", handleEnded);

        // React state listeners: update DOM on React state changes
        switch (props.playingState) {
            case PlayingStateEnum.PLAYING:
                audio.play();
                break;
            case PlayingStateEnum.PAUSED:
                audio.pause();
                break;
            default:
                break;
        }

        // effect cleanup
        return () => {
            audio.removeEventListener("loadeddata", setAudioTime);
            audio.removeEventListener("timeupdate", setAudioTime);
            audio.removeEventListener("ended", handleEnded);
        }
    //    TODO add click time here to trigger rerender
    }, [props.currentTrack, props.trackList, clickedTime]);

    // play handler effect
    useEffect(() => {
        const audio = document.getElementById("audio");

        // React state listeners: update DOM on React state changes
        switch (props.playingState) {
            case PlayingStateEnum.PLAYING:
                audio.play();
                break;
            case PlayingStateEnum.PAUSED:
                audio.pause();
                break;
            default:
                break;
        }
    }, [props.playingState]);

    const coverArtURI = APIServiceUtil.augmentAirsonicAPI('/rest/getCoverArt?size=320&id=' + props.trackList[props.currentTrack].coverArt);
    return (
        <div> {props.trackList[props.currentTrack] !== null ? (
            <div className="player">
                <audio id="audio">
                    <source id='audioSource' src='' />
                    Your browser does not support the <code>audio</code> element.
                </audio>

                <img height='160px' width='160px' src={coverArtURI}/>
                <Song songName={props.trackList[props.currentTrack].title} songArtist={props.trackList[props.currentTrack].artist}/>
                <div className="controls">
                    {props.playingState === PlayingStateEnum.PLAYING ?
                        <Pause/> :
                        <Play/>
                    }
                    <Bar curTime={props.elapsedTime} duration={props.trackList[props.currentTrack].duration}
                         onTimeUpdate={(time) => setClickedTime(time)}/>
                </div>
            </div>) : (
            <div><p>current track is null</p></div>
        )
        }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
