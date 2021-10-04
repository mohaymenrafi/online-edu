import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../../images/hero-image.webp';
import './Hero.css';
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-4">
                <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-medium">Popular Online Courses</h3>
                    <h2 className="text-5xl font-bold my-8 md:text-6xl">The New Way To Learn Properly in With Us!</h2>
                    <NavLink to="/courses"><button className="text-xl font-medium py-4 px-8 rounded bg-blue-600 text-white">Get Started</button></NavLink>
                </div>
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;