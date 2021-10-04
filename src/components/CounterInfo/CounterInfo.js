import React from 'react';
import './CounterInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const CounterInfo = () => {
    return (
        <div className="counter-info py-24">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <FontAwesomeIcon icon={faBookReader} color="#dc2626" className="info-icon" size="4x"></FontAwesomeIcon>
                    <h3 className="text-center mt-4 text-2xl font-bold text-red-600">10050+ Students</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookOpen} color="#10b981" className="info-icon" size="4x"></FontAwesomeIcon>
                    <h3 className="text-center mt-4 text-2xl font-bold text-green-500">70+ Courses</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserAlt} color="#2563eb" className="info-icon" size="4x"></FontAwesomeIcon>
                    <h3 className="text-center mt-4 text-2xl font-bold text-blue-600">50+ Instructors</h3>
                </div>
                <div>
                    <FontAwesomeIcon icon={faClock} color="#ec4899" className="info-icon" size="4x"></FontAwesomeIcon>
                    <h3 className="text-center mt-4 text-2xl font-bold text-pink-500">3 years in Business</h3>
                </div>
            </div>
        </div>
    );
};

export default CounterInfo;