import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./login.component";
import Home from "./home.component";
import Album from "./album.component";
import SearchResults from './searchResults.component';
import Player from './player.component';
import Playlists from './playlists.component';
import Playlist from './playlist.component';
import Artist from './artist.component';

const Main = () => {
    const [playerToggled, setPlayerToggled] = useState(false);
    return (
        <Router>
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
                <Player setPlayerToggled={setPlayerToggled}/>
            </div>
        </Router>
    )
};

export default Main;