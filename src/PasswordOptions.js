import React, { useState } from 'react';
import Options from './Options';
const PasswordOptions = () => {
    const [passwordValue, setpasswordValue] = useState(''); 
    const [selectedProps, setSelectedProps] = useState([]);
    const upperAndLowercharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "123456789";
    const specialChars = "!@#$%^&*()_-+={[}]";
    
    const getCharsToChooseFrom = () => {
        let chars = '';
        selectedProps.forEach((element) => {
            if (element === 'number') {
                chars += numbers;
            }
            if (element === 'specialChars') {
                chars += specialChars;
            }
            if (element === 'upperlower') {
                chars += upperAndLowercharacters;
            }
        });
        return chars;
    }
    const generatePassword = (e) => {
        e.preventDefault();
        setpasswordValue('');
        setSelectedProps(['numbers', 'specialChars', 'upperlower']);
        setpasswordValue(() =>{
            let password = "";
            let charsToChooseFrom = getCharsToChooseFrom(); 
            
            for (let i = 0; i < charsToChooseFrom.length; i++) {
                let charPosition = Math.random() * charsToChooseFrom.length;
                password = password + charsToChooseFrom.charAt(charPosition);
            }
            // for (let i = 0; i < 8; i++) {
            //     let charPosition = Math.random() * 79;
            //     password = password + characters.charAt(charPosition);
            // }

            return password;
        }) 
    } 
    return (
        <div>
            <form onSubmit={e => generatePassword(e)}>
                <Options />
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