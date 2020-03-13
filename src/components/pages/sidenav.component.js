import React from "react";
import '../../css/sidebar.scss'
import {Link} from 'react-router-dom';

const SideNav = () => {
    return (
        <div id='sidebar_container'>
            <div style={{paddingTop: '56px'}}/>
            <Link className='sidebar_link' to="/playlists">Playlists</Link>
            <Link  className='sidebar_link' to="/artists">Artists</Link>
            <a  className='sidebar_link' href="#">Settings</a>
        </div>
    )
}

export default SideNav;