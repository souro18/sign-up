import React from 'react';

const Button = ({ label, onClick, currentPage, disabled}) => {
    return (
        <button className={`btn ${disabled ? 'disabled' : ''}`} onClick={() => onClick(currentPage)}>{label}</button>
    )
}

export default React.memo(Button);