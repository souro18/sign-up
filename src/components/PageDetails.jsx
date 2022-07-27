import React from 'react';
import { INPUT_FIELD_DETAILS } from '../constants';
import InputBox from './InputBox';

const PageDetails = ({ details = {}, onInputChange }) => {
    return (<div>
        <div className='heading-wrapper'>
        <h2 className='title'>{details.title}</h2>
        <p className='description'>{details.description}</p>
        </div>
        <div className='form-container'>
            {(details?.inputFields || []).map(inputField => {
                return <InputBox details={INPUT_FIELD_DETAILS[inputField]} key={inputField} onInputChange={onInputChange} inputField={inputField}/>
            })}
        </div>
    </div>)
}

export default PageDetails;