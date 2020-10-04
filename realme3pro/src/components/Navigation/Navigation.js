import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav  >
            <h3>Welcome</h3>
            <ul className= 'navitems'>
                <Link to='/'>
                    <li>Introduction</li>
                </Link>
                <Link to='/customrom'>
                    <li>Custom ROMs</li>
                </Link>
                <Link to='/introduction'>
                    <li>Stock ROM</li>
                </Link>
                <Link to='/introduction'>
                    <li>Others</li>
                </Link>
            </ul>


        </nav> 
    );
}

export default Navigation;