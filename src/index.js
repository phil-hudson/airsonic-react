import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import playerReducer from './reducers/player.reducer';
import authReducer from './reducers/auth.reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    playerReducer,
    authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();