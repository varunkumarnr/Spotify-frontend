import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import {useDataLayerValue} from './DataLayer';
function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
       
        <div className="header">
            <div className = "header-left">
               <SearchIcon />
               <input type="text" placeholder="Search for song or artist"></input>
            </div>
            <div className = "header-right">
                <Avatar src={user?.images[0].url} alt="Varun" />
                 <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    )
}

export default Header
