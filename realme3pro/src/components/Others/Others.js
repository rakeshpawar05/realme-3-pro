import React from 'react';
import Recoverycard from './Recoverycard';
import Kernelcard from './Kernelcard';
import Recoverylist from './Recoverylist';
import Kernellist from './Kernellist';

const Others = () => {

    const getrecoverycard = recoveryobj => {
        return (
            <Recoverycard {...recoveryobj} />
        );
    }

    const getkernelcard = kernelobj => {
        return (
            <Kernelcard {...kernelobj} />
        );
    }

    return (
        <div className = 'customrom'>
            <div>
                <h1>Recovery</h1>
                <div className = 'box'>
                    {Recoverylist.map(recoveryobj => getrecoverycard(recoveryobj))}
                </div>
            </div>
            <div className ='customrom'>
                <h1>Kernel</h1>
                <div className = 'box'>
                    {Kernellist.map(kernelobj => getkernelcard(kernelobj))}
                </div>
            </div>
        </div>
    );
}

export default Others;