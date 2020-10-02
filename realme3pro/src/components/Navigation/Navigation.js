import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav  >   
            <h3 className = 'icons '>Welcome</h3>
            <p className = 'icons pointer'>Introduction</p>
            <p className = 'icons pointer'>Custom ROMs</p>
            <p className = 'icons pointer'>Stock ROM</p>
            <p className = 'icons pointer'>Others</p>
        </nav> 
    );
}

export default Navigation;