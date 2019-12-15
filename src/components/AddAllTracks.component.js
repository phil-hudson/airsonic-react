import React from "react";

const AddAllTracks = (props) => {

    return (
        <div>
            {/*TODO make this better*/}
            <button className="btn btn-outline-info bg-white" about='Add tracks to up next' type="submit" onClick={e => {
                e.preventDefault();
                props.addTracks()
            }}>Add tracks to up next</button>
        </div>
    )
}

export default AddAllTracks;