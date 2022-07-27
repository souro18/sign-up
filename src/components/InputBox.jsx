import React from 'react';

const InputBox = ({ details , inputField, onInputChange}) => {
    return (<div className='input-group'>
        <label>{details.label}</label>
        <input type={details.type} placeholder={details.placeholder} onChange={(e) => onInputChange(inputField, e.target.value)}/>
    </div>)
}

export default InputBox;