import React ,{useEffect,useState} from 'react';
import Login from './Login'
import User from './User'
import './App.css';
import {getTokenFromResponse} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLaterValue} from './DataLayer';
const spotify = new SpotifyWebApi(); //constructor r a super variable
function App() {
 
  const [{user,token},dispatch] = useDataLaterValue();
  //runs code based on given conditions
  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash=(" ")
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })

      //setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        //console.log(user);
        dispatch({
          type : 'SET_USER',
          user:user
        })

      });
      spotify.getUserPlaylists().then((playlists) => {
         dispatch({
           type : "SET_PLAYLISTS",
           playlists : playlists ,
         })
      } 
      )
    }
    //console.log(token);

  },[]);
  return (
    <div className="App">
      {
        token ?<User spotify={spotify} />:<Login />
      }
     
    </div>
  );
}

export default App;
