import React, { useCallback, useState } from 'react';
import { INPUT_FIELD_DETAILS, PAGES, PAGE_DETAILS } from '../constants';
import { getInitialStateForInputFields, isEmpty } from '../helpers';
import Button from './Button';
import Header from './Header';
import PageDetails from './PageDetails';
import PaginationProgressBar from './PaginationProgressBar';

const Dashboard = () => {
    const [selectedPage, setSelectedPage] = useState(PAGES.ONE);
    const [selectedPageDetails, setSelectedPageDetails] = useState(PAGE_DETAILS[PAGES.ONE]);
    const [inputFields, setInputFields] = useState(getInitialStateForInputFields());

    const onInputChange = useCallback((inputFieldType, value) => {
        const newInputField = { ...inputFields };
        const inputFieldDetails = newInputField[inputFieldType];
        inputFieldDetails.value = value;
        inputFieldDetails.hasError = isEmpty(value) && INPUT_FIELD_DETAILS[inputFieldType].isRequired;
        setInputFields(newInputField);
    }, [inputFields]);

    const disableActionButton = () => {
        return selectedPageDetails.inputFields.some(fieldType => inputFields[fieldType].hasError);
    }

    const onButtonClick = (currentPage) => {
        if(currentPage === PAGES.FOUR) {
            alert('form submitted');
        } else {
            const nextPage = currentPage + 1;
            setSelectedPage(nextPage);
            setSelectedPageDetails(PAGE_DETAILS[nextPage]);
        }
    };

    return (<div>
        <Header />
        <PaginationProgressBar />
        <PageDetails details={selectedPageDetails} onInputChange={onInputChange} inputFields={inputFields} currentPage={selectedPage}/>
        <div className='form-container'>
            <Button disabled={disableActionButton()} label={selectedPageDetails?.actionLabel} onClick={onButtonClick} currentPage={selectedPage}/>
        </div>
    </div>)
}

export default Dashboard;