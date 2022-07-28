import { INPUT_FIELDS, INPUT_FIELD_DETAILS, PAGES } from "../constants";

const getInitialStateForInputFields = () => {
    const state = {};
    Object.values(INPUT_FIELDS).forEach(field => {
        state[field] = {
            value: '',
            hasError: INPUT_FIELD_DETAILS[field].isRequired,
            errorMessage: ''
        }
    });
    return state;
};

const isEmpty = (value) => {
    if([null, undefined, '', [], {}].includes(value)) {
        return true
    }
    return false;
}

const isLastPage = (currentPage) => {
    const pages = Object.values(PAGES);
    return pages.indexOf(currentPage) === pages.length - 1;
}

export { getInitialStateForInputFields, isEmpty, isLastPage };