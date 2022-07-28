import { INPUT_FIELDS, INPUT_FIELD_DETAILS } from "../constants";

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

export { getInitialStateForInputFields, isEmpty };