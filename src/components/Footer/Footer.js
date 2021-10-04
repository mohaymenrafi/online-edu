import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container mx-auto py-16 grid  md:grid-cols-2">
                <div>
                    <h2 className="text-white text-3xl">Stay Updated</h2>
                    <div className="card-mail flex items-center my-10 w-8/12">
                        <input type="email" className="border-l border-t border-b border-gray-200  w-full text-base md:text-lg px-3 py-2" placeholder="Enter Your Email"/>
                        <button className="text-white font-regular capitalize px-3 py-2 text-base md:text-lg border-t border-r border-b border-orange-500">subscribe</button>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-3xl">Let's Get Social</h2>
                    <div className="icons">
                        <SocialIcon url="#" fgColor="#0b0b1d" bgColor="#fff" network="twitter" />
                        <SocialIcon url="#" fgColor="#0b0b1d" bgColor="#fff" network="facebook" />
                        <SocialIcon url="#" fgColor="#0b0b1d" bgColor="#fff" network="instagram" />
                        <SocialIcon url="#" fgColor="#0b0b1d" bgColor="#fff" network="youtube" />
                    </div>
                </div>
            </div>
            <div className="container py-12 border-t mx-auto">
                <p className="text-white text-lg font-normal text-center">Copyright &copy;2021 | All Rights Reserved | Created By MhAbdullah | Design Inspiration: ColorLib </p>
            </div>
        </div>
    );
};

export default Footer;