import React from "react";
import TrackRow from './TrackRow.component';
import '../../css/_shared.scss';

type Props = {
    tracks: [Object]
};
const TrackList = (props: Props) => {
    return (
        <div className='list-contents'>
            {
                props.tracks.map((track,index) => {

                        return <TrackRow track={track} key={index}/>
                    }
                )

            }
        </div>);
};

export default TrackList;