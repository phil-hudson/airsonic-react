import {
    ADD_TRACK,
    ADD_TRACKS,
    SET_CURRENT_TRACK,
    SET_ELAPSED_TIME,
    PAUSE,
    PLAY,
    CLEAR_PLAYLIST,
    REMOVE_TRACK_AT_PLAYLIST_INDEX
} from '../actions/player.actions';

import PlayingStateEnum from '../enums/PlayingState.enum';

const initialState = {
    trackList: [],
    currentTrack: 0,
    elapsedTime: 0,
    playingState: PlayingStateEnum.PLAYING
}

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TRACK:
            return Object.assign({}, state, {
                ...state,
                trackList: [
                    ...state.trackList,
                    action.track
                ],
            });
        case ADD_TRACKS:
            return Object.assign({}, state, {
                ...state,
                trackList: [
                    ...state.trackList,
                    ...action.tracks
                ]
            });
        case REMOVE_TRACK_AT_PLAYLIST_INDEX:
            let newState = [...state.trackList];
            newState.splice(action.index, 1);
            return Object.assign({}, state, {
                ...state,
                trackList: newState,
            });
        case CLEAR_PLAYLIST:
            return Object.assign({}, state, {
                ...state,
                trackList: [],
            });
        case SET_CURRENT_TRACK:
            return Object.assign({}, state, {
                ...state,
                currentTrack: action.trackIndex,
            });
        case SET_ELAPSED_TIME:
            return Object.assign({}, state, {
                ...state,
                elapsedTime: action.time,
            });
        case PLAY:
            return Object.assign({}, state, {
                ...state,
                playingState: PlayingStateEnum.PLAYING

            });
        case PAUSE:
            return Object.assign({}, state, {
                ...state,
                playingState: PlayingStateEnum.PAUSED
            });
        default:
            return state
    }
}