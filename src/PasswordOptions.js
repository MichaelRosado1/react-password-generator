import React from 'react';
import Options from './Options';
const PasswordOptions = () => {
    return (
        <div>

            <Options optionType={type} />
            <label>
            <input id="Numbers" type="checkbox"></input>
            Should we include numbers in the password? (i.e: 1-9)
            </label>
        </div>
    );
}

export default PasswordOptions;