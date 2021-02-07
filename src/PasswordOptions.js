import React from 'react';

const PasswordOptions = () => {
    

    const createCheckboxOptions = () => {
        const items = [
        'Special Characters',
        'Numbers',
        'Capitalization'
        ];

        return (
            <div>
                {items.map((element) => {
                    {console.log(element)}
                    <label>
                        <input type="checkbox">
                            <h4>{element}</h4>
                        </input>
                    </label>

                })}
            </div>
        );
    }
    return (
        <div>
            <form>
                {createCheckboxOptions()}
            </form>
        </div>
    )
}

export default PasswordOptions;