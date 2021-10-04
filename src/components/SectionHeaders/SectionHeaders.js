import React from 'react';
import './SectionHeader.css';

const SectionHeaders = (props) => {
    return (
        <div className="section-headers">
            <div className="container mx-auto flex items-center justify-center py-24">
                <h2 className="text-7xl text-white font-semibold py-16">{props.pageTitle}</h2>
            </div>
        </div>
    );
};

export default SectionHeaders;