import React from 'react';
import { INPUT_FIELD_DETAILS, INPUT_TYPES } from '../constants';
import InputBox from './InputBox';
import RadioCard from './RadioCard';

const PageDetails = ({ details = {}, onInputChange, inputFields }) => {
    return (<div>
        <div className='heading-wrapper'>
        <h2 className='title'>{details.title}</h2>
        <p className='description'>{details.description}</p>
        </div>
        <div className='form-container'>
            {(details?.inputFields || []).map(inputField => {
                const inputFieldDetails = INPUT_FIELD_DETAILS[inputField]
                return inputFieldDetails.type === INPUT_TYPES.TEXT ?
                 <InputBox details={inputFieldDetails} key={inputField} onInputChange={onInputChange} inputField={inputField}/> :
                 <RadioCard
                  details={inputFieldDetails}
                    key={inputField}
                    value={inputFields[inputField].value}
                    onInputChange={onInputChange}
                    inputField={inputField}/>
            })}
        </div>
    </div>)
}

export default PageDetails;