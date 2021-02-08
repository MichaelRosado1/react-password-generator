import React from 'react';

const Options = (props) => {
    const options = ['numbers', 'special characters', 'capitalization'];
    return (
        <div>
            {options.map((type) => (
                <lable>
                    {console.log(props)}
                    <input type="checkbox" id={type} />
                    Would you like to include {type}
                    <br></br>
                </lable>
            ))}
        </div>
    )
}

export default Options;