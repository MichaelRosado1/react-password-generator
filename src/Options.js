import React, { useState, useEffect } from 'react';

const Options = (props) => {
    const options = ['numbers', 'special characters', 'capitalization'];
    let setOptions = props.selected;
    useEffect(() => {
        setOptions = props.selected;
    }, props);
    return (
        <div>
            {options.map((type) => (
                <lable>
                    {console.log(setOptions)}
                    <input type="checkbox" id={type} />
                    Would you like to include {type}
                    <br></br>
                </lable>
            ))}
        </div>
    )
}

export default Options;