import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavTop from './components/pages/navbar.component';
import SideNav from './components/pages/sidenav.component';
import Main from './components/pages/main.component';
import Login from './components/pages/login.component';

function App() {
    return (<Router>
            <div className="App" style={{
                display: 'flex',                   /* defines flexbox */
                flexDirection: 'column',          /* top to bottom */
                flex: 1,
            }}>
                <NavTop/>
                <div style={{paddingTop: '56px'}}/>
                <SideNav/>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Main/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
