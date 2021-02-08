import React, { useState } from 'react';
import Options from './Options';
const PasswordOptions = () => {
    const [passwordValue, setpasswordValue] = useState(''); 
    const [selectedProps, setSelectedProps] = useState([]);

    const handleSelectedProps = (type) => {
        setSelectedProps(selectedProps => [...selectedProps, type]);
    }
    const generatePassword = (e) => {
        e.preventDefault();
    } 
    return (
        <div>
            <form  onSubmit={e => generatePassword(e)} >
                <Options setSelected={handleSelectedProps}/>
                <button type="submit" onSubmit={e => generatePassword(e)}>Generate a new password</button>
            </form>
            <label>
                <input type="text" value={passwordValue}></input>
            </label>
        </div>
    );
}

export default PasswordOptions;