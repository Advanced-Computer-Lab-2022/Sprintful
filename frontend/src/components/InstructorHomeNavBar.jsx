import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import InstructorProfileDropdownMenu from './InstructorProfileDropdownMenu'
import {useNavigate} from "react-router";

const InstructorHomeNavBar = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    return (
        <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
            </a>
            {/* <!-- ***** Logo End ***** --> */}
            {/* <!-- ***** Menu Start ***** --> */}
            <ul className="nav">
                <li><a onClick={()=>navigate(`/instructor?id=${id}`)} >Home</a></li>
                <Country />
                <li><a href="contact.html">Contact Us</a></li>
                <InstructorProfileDropdownMenu />
                <li></li>
            </ul>
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
        </nav>
    )
}
export default InstructorHomeNavBar;