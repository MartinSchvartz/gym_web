import React from 'react';
import {useState, useEffect} from 'react';
import { Navbar } from 'rsuite';
import './Styles.css';
import Home from '../HomePage/index'
import {Link} from 'react-router-dom';


function NavBar (){
    return(
        <nav>
            <ul className="nav-links">
                <Link to="/Login">
                    <li>Login</li>
                </Link>
                <Link to="/Profile">
                    <li>Profile</li>
                </Link>
                <Link to="/WeekWods">
                    <li>WeekWods</li>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    )
}
export default NavBar;