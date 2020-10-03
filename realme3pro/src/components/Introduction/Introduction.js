import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <div className = 'intro' >
           <div className = 'info b1 f5'>
               <div>
                <p className = 'purple f2'>Realme 3 Pro</p>
                The Realme 3 Pro is a 6.3" phone with a 1080x2340p resolution display. 
                The Snapdragon 710 is paired with 4/6GB of RAM and 64/128GB of storage. 
                The main camera is 16+5MP and the selfie camera is 25MP. 
                The battery has a 4045mAh capacity.
                </div>
            </div>
           <div className = 'info b2'></div>
           <div className = 'info b3'>
               <p>Link to join Telegram group for update and other discussion</p>
               <a className = 'f2 blue pointer' href = 'https://t.me/realme3pros'>Telegram</a>
           </div>
           <div className = 'info b4 f5'>
            
           </div>
           <div className = 'info b5'>
               <p>Link for XDA Forums</p>
               <a className = 'pointer orange f2' href = 'https://forum.xda-developers.com/realme-3-pro'>
                    XDA</a>
           </div>
        </div>
    );
}

export default Introduction;