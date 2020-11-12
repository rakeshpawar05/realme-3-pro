import React from 'react';
import './CustomROM.css';
import Romcard from './Displayrom';
import Romlist from './Romlist';

const CustomROM = () => {

    const getRomcard = romobj => {
        return(
            <Romcard {...romobj} />
        );
    };

    return (
        <div className = 'customrom'>
            <h1>CustomROM </h1>
            <div className = 'box'>
                {Romlist.map(obj => getRomcard(obj))}
            </div>
        </div>
    );
}

export default CustomROM;