import React from 'react';
import './login.css';
import {loginURL} from './spotify'
function Login() {
    return (
        <div className="loginPage">
           {/* logo*/}
              <img className="LoginPage-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-logo"/> 
           {/* button*/}
           {/* https://www.logo.wine/a/logo/Spotify/Spotify-Black-Logo.wine.svg */} 
           <a href={loginURL} className="LoginPage-button">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
