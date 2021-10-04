import React from 'react';
import './CategoryGrid.css';

const CategoryGrid = (props) => {
    const {name, img} = props.category;
    return (
        <div>
            <div className="border rounded shadow p-4">
                <img src={img} alt={name} className="rounded w-full" />
                <h2 className="josefin text-2xl mt-4 text-center">{name}</h2>
            </div>
        </div>
    );
};

export default CategoryGrid;