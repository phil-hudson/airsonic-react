import React from "react";
import {Link} from 'react-router-dom';
import SearchForm from '../generic/SearchForm.component';
import NavBar from '../generic/NavBar.component';

const NavTop = () => {

    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        // <div className="container-fluid">
        //         <Link className="navbar-brand" to={"/home"}>Airsonic</Link>
        //         <SearchForm />
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item">
        //                     {/*TODO call function to log out, clear local creds*/}
        //                     <a className="nav-link" onClick=''>Logout</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <div>
        <NavBar/>
        <SearchForm />
        </div>
    )
}

export default NavTop;