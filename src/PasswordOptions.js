import React, { useState } from 'react';
import Options from './Options';
const PasswordOptions = () => {
    const [passwordValue, setpasswordValue] = useState(''); 
    const [selectedProps, setSelectedProps] = useState([]);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+-{}[]";
    const handleSelectedProps = (type) => {
        setSelectedProps([...selectedProps, type]);
    }
    const generatePassword = (e) => {
        e.preventDefault();

        setpasswordValue(() =>{
            let password = "";
            for (let i = 0; i < 8; i++) {
                let charPosition = Math.random() * 79;
                password = password + characters.charAt(charPosition);
            }

            return password;
        }) 
    } 
    return (
        <div>
            <form onSubmit={e => generatePassword(e)}>
                <Options setSelected={handleSelectedProps}/>
                <button type="submit">Generate a new password</button>
            </form>
            <button type="submit">Clear password</button>
            <label>
                <input type="text" onChange={e => setpasswordValue(e.target.value)} value={passwordValue}></input>
            </label>
        </div>
    );
}

export default PasswordOptions;