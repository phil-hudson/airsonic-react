import React from "react";
import {Link} from 'react-router-dom';

const SideNav = () => {

const sideNavStyle =  {
        height: '100%',
        width: '160px',
        position: 'fixed',
        zIndex: '1',
        top: '0',
        left: '0',
        backgroundColor: '#111',
        overflowX: 'hidden',
        paddingTop: '20px'
    };

const sideNavLinkStyle = {
        padding: '6px 8px 6px 16px',
        textDecoration: 'none',
        fontSize: '15px',
        color: '#818181',
        display: 'block',
    }


    return (
        <div style={sideNavStyle}>
            <div style={{paddingTop: '56px'}}/>
            <Link style={sideNavLinkStyle} to="/playlists">Playlists</Link>
            <Link style={sideNavLinkStyle} to="/artists">Artists</Link>
            <a style={sideNavLinkStyle} href="#">Settings</a>
        </div>
    )
}

export default SideNav;