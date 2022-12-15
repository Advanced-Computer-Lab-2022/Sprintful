import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Country from '../components/Country';
import ProfileDropdownMenu from '../components/ProfileDropdownMenu';

const TraineeHomeNavBar = () => {

    return (
        <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
            </a>
            {/* <!-- ***** Logo End ***** --> */}
            {/* <!-- ***** Menu Start ***** --> */}
            <ul className="nav">
                <li><a href="index.html" className="active">Home</a></li>
                <Country />
                <li><a href="contact.html">Contact Us</a></li>
                {/* <li><a href="listing.html">My Courses</a></li>
                <li><a href="listing.html">My profile</a></li> */}
                <ProfileDropdownMenu />
                <li></li>
            </ul>
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
        </nav>
    )
}

export default TraineeHomeNavBar;