import React from 'react';

const AssailantsName = () => {
    const handleInputSubmit = (event) => {

    }

    return (
    <div>
        <h3>
            What is the name of Assailant?
        </h3>
        <div>
        <input onSubmit={handleInputSubmit}></input>
        </div>
        <button></button>
    </div>
    )
};

export default AssailantsName;