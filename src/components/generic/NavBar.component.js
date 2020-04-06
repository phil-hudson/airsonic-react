// @flow
import * as React from 'react';
import '../../css/navbar.scss';
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
        <div id="navBarWrap">
            <Link className='sidebar_link' to="/home">Home</Link>
            <Link className='sidebar_link' to="/playlists">Playlists</Link>
            <Link  className='sidebar_link' to="/artists">Artists</Link>
            {/*TODO call function to log out, clear local creds*/}
            <Link  className='sidebar_link' to="/artists">Logout</Link>
        </div>
    );
};