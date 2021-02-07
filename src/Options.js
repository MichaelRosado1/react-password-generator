import React from 'react';

const Options = () => {

    const options = ['numbers', 'special characters', 'capitalization'];

    return (
        <div>
            {options.map((type) => (
                <lable>
                    <input type="checkbox" />
                    Would you like to include {type}
                    <br></br>
                </lable>
            ))}
        </div>
    )
}

export default Options;