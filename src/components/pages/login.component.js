import React, {useState} from "react";
import * as CryptoJS from 'crypto-js';
import {useHistory} from "react-router"
import {bindActionCreators} from 'redux';
import {setSuccessfulAuth} from '../../actions/auth.actions';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setSuccessfulAuth}, dispatch)
}

const Login = (props) => {

    const username = localStorage.getItem('username');
    const server = localStorage.getItem('server');
    const [inputs, setInputs] = useState({"username": username, "password": "", "serverAddress": server, 'remember': false});
    const history = useHistory()
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };
    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        const password = hashPassword(inputs.password);
        loginRequest(inputs.serverAddress, inputs.username, password.token, password.salt, inputs.remember);
    };
    const hashPassword = (password) => {
        const salt = CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.random(20));
        const token = CryptoJS.MD5(password + salt);

        return {
            salt: salt,
            token: token,
        };
    };

    const loginRequest = (server, username, token, salt, remember) => {
        const appName = 'ReactFrontend';
        fetch(`${server}/rest/ping.view?u=${username}&t=${token}&s=${salt}&v=1.15.0&c=${appName}&f=json`, {
            crossDomain: true,
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                // this.setState({ contacts: data })
                console.log('success');
                console.log(data);
                if (data['subsonic-response']['status'] === 'ok') {
                    // store token
                    if (remember === true) {
                        localStorage.setItem('server', server);
                        localStorage.setItem('username', username);
                        localStorage.setItem('token', token);
                        localStorage.setItem('salt', salt);
                    }
                    props.setSuccessfulAuth(true);
                    history.push("/home")
                } else {
                    console.warn(data);
                }
            })
            .catch(console.log)
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter username" name="username"
                       onChange={handleInputChange} value={inputs.username} required/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password"
                       onChange={handleInputChange} value={inputs.password} required/>
            </div>

            <div className="form-group">
                <label>Server address</label>
                <input type="text" className="form-control" placeholder="Enter server address" name="serverAddress"
                       onChange={handleInputChange} value={inputs.serverAddress} required/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="remember" id="remember"/>
                    <label className="custom-control-label" htmlFor="remember">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
            </div>
        </div>
    );

}

export default connect(null, mapDispatchToProps)(Login);