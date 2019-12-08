import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/pages/login.component";
import Home from "./components/pages/home.component";
import Album from "./components/pages/album.component";
import NavTop from './components/pages/navbar.component';
import SideNav from './components/pages/sidenav.component';
import SearchResults from './components/pages/searchResults.component';
import Player from './components/pages/player.component';
import Playlists from './components/pages/playlists.component';
import Playlist from './components/pages/playlist.component';
import Artist from './components/pages/artist.component';

function App() {
    return (<Router>
            <div className="App">
                <NavTop/>
                <div style={{paddingTop: '56px'}}/>
                <SideNav/>
                <Switch>
                    <div style={{'marginLeft': '160px'}}>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/album/:id' component={Album}/>
                        <Route exact path='/search:query' component={SearchResults}/>
                        <Route exact path='/player' component={Player}/>
                        <Route exact path='/playlists' component={Playlists}/>
                        <Route exact path='/playlist/:id' component={Playlist}/>
                        <Route exact path='/artist/:id' component={Artist}/>
                    </div>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
