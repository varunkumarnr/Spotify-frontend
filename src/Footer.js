import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid , Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer() {
    return (
        <div className = "footer">
             <div className="footer-left">
                <img src="https://i.scdn.co/image/ab67616d00004851f67d3f48c290e43480172110" alt="song" className="footer-songlogo"></img>
                <div className = "song-info">
                    <h4>bruh!</h4>
                    <p>myself</p>
                </div> 
             </div>
             <div className = "footer-center">
                 <ShuffleIcon className = "footer-green" />
                 <SkipPreviousIcon className = "footer-icon" />
                 <PlayCircleOutlineIcon fontSize="large"  className="footer-icon" />
                 <SkipNextIcon className = "footer-icon" />
                 <RepeatIcon className = "footer-green" />

             </div>
             <div className = "footer-right">
             <Grid container spacing={2}>
               <Grid item>
               <PlaylistPlayIcon />
             </Grid>
             <Grid item>
               <VolumeDownIcon />
             </Grid>
             <Grid item xs>
               <Slider aria-labelledby="continuous-slider" />
            </Grid>
        </Grid>

             </div>
        </div>
    )
}

export default Footer
