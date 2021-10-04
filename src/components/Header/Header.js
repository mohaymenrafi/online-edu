import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.webp'
import './Header.css';
import Topbar from './Topbar/Topbar';

const Header = () => {
    return (
        <div>
            <Topbar/>
            <div className="bg-gray-50">
                <div className="container mx-auto flex items-center py-8 justify-between">
                    <div>
                        <NavLink to="/"><img src={logo} alt="online-edu-logo"/></NavLink>
                    </div>
                    <div className="text-lg font-regular">
                        <NavLink to="/home" className="nav">Home</NavLink>
                        <NavLink to="/about-us" className="nav">About</NavLink>
                        <NavLink to="/courses" className="nav">Courses</NavLink>
                        <NavLink to="/contact" className="nav">Contact Us</NavLink>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Header;