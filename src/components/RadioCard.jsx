import React from 'react';

const RadioCard = ({ details , inputField, onInputChange, value }) => {
    return (
        <div className="radio-card-wrapper">
            {
                (details.options || []).map(option => {
                    const isSelected = option.value === value;
                    return <div className={`radio-card ${isSelected ? 'selected' : ''}`} onClick={() => onInputChange(inputField, option.value)}>
                        <span className={`material-icons md-24 ${isSelected ? 'blue' : 'grey'}`}>{option.icon}</span>
                        <h4 className="title">{option.title}</h4>
                        <p className="description">{option.description}</p>
                        </div>
                })
            }
        </div>
    )
}

export default RadioCard;