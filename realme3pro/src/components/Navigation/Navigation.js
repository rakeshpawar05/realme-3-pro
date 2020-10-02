import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav  >   
            <h3 className = 'icons'>Welcome</h3>
            <p className = 'icons'>Introduction</p>
            <p className = 'icons'>Custom ROMs</p>
            <p className = 'icons'>Stock ROM</p>
            <p className = 'icons'>Others</p>
        </nav> 
    );
}

export default Navigation;