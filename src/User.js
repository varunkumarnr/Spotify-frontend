import React from 'react';
import './User.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function User({spotify}) {
    return (
        <div className = "user">
            <div className = "user-body" >
               <Sidebar />
               <Body />
            </div>
            <Footer />
        </div>
    )
}

export default User
