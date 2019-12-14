import React from "react";
import TrackRow from './TrackRow.component';

type Props = {
    tracks: [Object]
};
const TrackList = (props: Props) => {
    return (
        <div style={{
            'display': 'flex',
            'flexWrap': 'no-wrap',
            'flexDirection': 'column',
            'alignItems': 'start'
        }}>
            {
                props.tracks.map((track,index) => {

                        return <TrackRow track={track} key={index}/>
                    }
                )

            }
        </div>);
}
export default TrackList;