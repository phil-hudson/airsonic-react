import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import NavTop from './components/pages/navbar.component';
import SideNav from './components/pages/sidenav.component';
import Login from './components/pages/login.component';
import Home from './components/pages/home.component';
import Album from './components/pages/album.component';
import SearchResults from './components/pages/searchResults.component';
import Player from './components/pages/player.component';
import Playlists from './components/pages/playlists.component';
import Playlist from './components/pages/playlist.component';
import Artist from './components/pages/artist.component';

function App() {
    const [playerToggled, setPlayerToggled] = useState(false);

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
                    {/*TODO sort this mess out*/}
                    <Route>
                        <div style={{
                            display: 'flex',                   /* defines flexbox */
                            flexDirection: 'column',          /* top to bottom */
                            flex: 1,
                        }}>
                            {playerToggled === false && (
                                <div style={{'marginLeft': '160px'}}>
                                    <Switch>
                                        <Route exact path='/' component={Login}/>
                                        <Route exact path='/home' component={Home}/>
                                        <Route exact path='/album/:id' component={Album}/>
                                        <Route exact path='/search:query' component={SearchResults}/>
                                        <Route exact path='/player' component={Player}/>
                                        <Route exact path='/playlists' component={Playlists}/>
                                        <Route exact path='/playlist/:id' component={Playlist}/>
                                        <Route exact path='/artist/:id' component={Artist}/>

                                    </Switch>
                                </div>
                            )}
                            <Player toggled={playerToggled} setPlayerToggled={setPlayerToggled}/>
                        </div>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
