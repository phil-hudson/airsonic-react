/*
 * action types
 */

export const ADD_TRACK = 'ADD_TRACK';
export const ADD_TRACKS = 'ADD_TRACKS'
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const REMOVE_TRACK_AT_PLAYLIST_INDEX = 'REMOVE_TRACK_AT_PLAYLIST_INDEX';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';

export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const SET_CURRENT_TRACK = 'CURRENT_TRACK';
export const SET_ELAPSED_TIME = 'ELAPSED_TIME';

/*
 * action creators
 */

/*
 * playlist
 */

export function addTrack(track : Object) {
    return { type: ADD_TRACK, track }
}

export function addTracks(tracks : [Object]) {
    return { type: ADD_TRACKS, tracks }
}

export function removeTrackAtPlaylistIndex(index : number) {
    return { type: REMOVE_TRACK_AT_PLAYLIST_INDEX, index }
}


export function clearPlaylist() {
    return { type: CLEAR_PLAYLIST, }
}

/*
 * player
 */

export function play() {
    return { type: PLAY,  }
}

export function pause() {
    return { type: PAUSE,  }
}

export function setCurrentTrack(trackIndex : number) {
    return { type: SET_CURRENT_TRACK, trackIndex }
}

export function setElapsedTime(time : number) {
    return { type: SET_ELAPSED_TIME, time }
}