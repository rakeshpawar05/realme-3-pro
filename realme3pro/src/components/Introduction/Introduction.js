import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <div className = 'intro'>
            <img alt ='realme3pro' className ='img' width ='40%' height = 'auto'
            src='https://theidealmobile.com/wp-content/uploads/2019/05/realme-3-pro.png' />
            <p className = 'body'>
                <h2>Realme 3 Pro</h2>
                The Realme 3 Pro is a 6.3" phone with a 1080x2340p resolution display.
                 The Snapdragon 710 is paired with 4/6GB of RAM and 64/128GB of storage.
                  The main camera is 16+5MP and the selfie camera is 25MP.
                   The battery has a 4045mAh capacity
            </p>
        </div>
    );
}

export default Introduction;