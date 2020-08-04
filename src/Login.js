import React from 'react';
import './login.css';
import {loginURL} from './spotify'
function Login() {
    return (
        <div className="loginPage">
           {/* logo*/}
              <img className="LoginPage-logo" src="https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg" alt="Spotify-logo"/> 
           {/* button*/}
           {/* https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg */} 
           <a href={loginURL} className="LoginPage-button">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
