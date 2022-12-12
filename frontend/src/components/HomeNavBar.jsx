import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Country from '../components/Country';

const HomeNavBar = () => {

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
                <li><a href="listing.html">Log in</a></li>
                <li><a href="listing.html">Sign up</a></li>

                <li></li>
            </ul>
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
        </nav>
    )
}

export default HomeNavBar;