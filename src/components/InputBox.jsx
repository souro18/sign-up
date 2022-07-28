import React from 'react';

const InputBox = ({ details , inputField, onInputChange}) => {
    return (<div className='input-group'>
        <label>{details.label}</label>
        {
            details.prefixText?.length > 0 ?
            <div className="prefix-wrapper">
                <div className="input-prefix"><span>{details.prefixText}</span></div>
                <input type={details.type} placeholder={details.placeholder} onChange={(e) => onInputChange(inputField, e.target.value)}/>
            </div> :
            <input type={details.type} placeholder={details.placeholder} onChange={(e) => onInputChange(inputField, e.target.value)}/>
        }
    </div>)
}

export default InputBox;