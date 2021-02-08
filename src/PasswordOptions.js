import React, { useState } from 'react';
import Options from './Options';
const PasswordOptions = () => {
    const [passwordValue, setpasswordValue] = useState(''); 
    const [selectedProps, setSelectedProps] = useState([]);

    const handleSelectedProps = (type) => {
        setSelectedProps([...selectedProps, type]);
    }
    const generatePassword = (e) => {
        e.preventDefault();

        setpasswordValue(() => (
            'randomPassword'
        ))
    } 
    return (
        <div>
            <form >
                <Options setSelected={handleSelectedProps}/>
                <button type="submit" onSubmit={e => generatePassword(e)}>Generate a new password</button>
                <button type="submit" onSubmit={e => setpasswordValue('')}>Clear password</button>
            </form>
            <label>
                <input type="text" onChange={e => setpasswordValue(e.target.value)} value={passwordValue}></input>
            </label>
        </div>
    );
}

export default PasswordOptions;