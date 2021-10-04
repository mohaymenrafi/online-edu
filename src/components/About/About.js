import React from 'react';
import CounterInfo from '../CounterInfo/CounterInfo';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './About.css';

const About = () => {
    return (
        <div>
            <SectionHeaders pageTitle="About Us"></SectionHeaders>
            <div className="container mx-auto info py-24">
                <div className="w-8/12 mx-auto">
                    <h2 className="text-4xl font-bold">Our Mission</h2>
                    <p className="text-xl mt-4">To support business owners building legacies for their families while supporting social and environmental causes that align with our values.</p>
                </div>
                <div className="w-8/12 mx-auto mt-16">
                    <h2 className="text-4xl font-bold">Our Vision</h2>
                    <p className="text-xl mt-4">To be part of a global community of self-sufficient families who contribute to developing individual communities near and far.</p>
                </div>
            </div>
            <CounterInfo></CounterInfo>
        </div>
    );
};

export default About;