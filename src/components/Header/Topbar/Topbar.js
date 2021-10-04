import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import './Topbar.css';


const Topbar = () => {
    return (
        <div className="bg-gray-50 border-b top-bar">
            <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex justify-start">
                    <li><FontAwesomeIcon icon={faEnvelope} /> info@onlineedu.com</li>
                    <li><FontAwesomeIcon icon={faMobile} /> +123 456789</li>
                </div>
                <div className="flex justify-end">
                    <li> <FontAwesomeIcon icon={faUser} /> Login</li>
                    <li> <FontAwesomeIcon icon={faLock} /> Register</li>
                </div>
            </div>
        </div>
    );
};

export default Topbar;