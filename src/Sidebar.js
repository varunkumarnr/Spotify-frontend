import React from 'react';
import Sidebaroptions from './Sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './SideBar.css';
import {useDataLaterValue} from './DataLayer';
function Sidebar() {
   const [{playlists} , dispatch] = useDataLaterValue();

    return (
        <div className = "sidebar">
        <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt= "spotify-logo"></img>
        <Sidebaroptions title = "Home" Icon = {HomeIcon}/>
        <Sidebaroptions title = "Search" Icon= {SearchIcon} />
        <Sidebaroptions title = "Your Library" Icon= {LibraryMusicIcon}/>
        <br />
        <strong className="sidebar-title">PLAYLISTS</strong>       
        <hr />
        {playlists?.items?.map(playlists=>(
            <Sidebaroptions title = {playlists.name}/>
        )
        )}


        </div>
    )
}

export default Sidebar
