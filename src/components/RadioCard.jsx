import React from 'react';

const RadioCard = ({ details , inputField, onInputChange, value }) => {
    return (
        <div className="radio-card-wrapper">
            {
                (details.options || []).map(option => {
                    return <div className={`radio-card ${option.value === value ? 'selected' : ''}`} onClick={() => onInputChange(inputField, option.value)}>
                        <h4 className="title">{option.title}</h4>
                        <p className="description">{option.description}</p>
                        </div>
                })
            }
        </div>
    )
}

export default RadioCard;