import React from 'react';

const Options = (props) => {

    const options = ['numbers', 'special characters', 'capitalization'];
    const selectedFunction = props.setSelected;
    return (
        <div>
            {options.map((type) => (
                <lable>
                    {console.log(props)}
                    <input type="checkbox" id={type} onChange={selectedFunction(type)}/>
                    Would you like to include {type}
                    <br></br>
                </lable>
            ))}
        </div>
    )
}

export default Options;