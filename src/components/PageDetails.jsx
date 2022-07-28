import React from 'react';
import { INPUT_FIELDS, INPUT_FIELD_DETAILS, INPUT_TYPES, PAGES } from '../constants';
import InputBox from './InputBox';
import RadioCard from './RadioCard';

const PageDetails = ({ details = {}, onInputChange, inputFields, currentPage }) => {
    const isLastPage = currentPage === PAGES.FOUR;
    const title = isLastPage ? `${details.title} ${inputFields[INPUT_FIELDS.USER_NAME].value}!` :
    details.title;
    return (<div>
        <div className='heading-wrapper'>
        {
            isLastPage ?
            <div className="check-circle">
                <span className="material-icons md-24">check</span>
            </div> : null
        }
        <h2 className='title'>{title}</h2>
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