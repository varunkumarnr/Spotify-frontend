import React ,{useEffect,useState} from 'react';
import Login from './Components/Login/Login'
import User from './Components/User/User'
import './App.css';
import {getTokenFromResponse} from './Components/Login/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi(); //constructor r a super variable
function App() {
  const [token,setToken] = useState(null);
  //runs code based on given conditions
  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash=(" ")
    const _token = hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      })
    }
    //console.log(setToken,"hello");

  });
  return (
    <div className="App">
      {
        token ?<User />:<Login />
      }
     
    </div>
  );
}

export default App;
