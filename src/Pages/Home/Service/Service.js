import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="service">
            <img className="img" src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <h5>Price: {price}</h5>
        </div>
    );
};

export default Service;