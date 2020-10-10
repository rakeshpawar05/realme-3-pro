import React from 'react';

const Recoverycard = (props) => {

    const {name, imageurl, info} = props

    return (
        <div className="card ">
            <img src={imageurl}
            alt="Avatar" className = 'logo'
                />
            <div className="container">
                <h4><b>{name}</b></h4>
                <p> {info}</p>
                    <p className = 'tc pointer'>Download</p>
            </div>
        </div>
    );
}

export default Recoverycard;