import {useReducer } from "react";

const initialInputState = {
    data: '',
    isFocus: false
}
const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {data: action.data, isFocus: state.isFocus};
    }
    if (action.type === 'BLUR'){
        return {isFocus : true,data : state.data}
    }
    if (action.type === 'RESET'){
        return {isFocus: false, data: '' }
    }
    return inputStateReducer ;
};


const useForm = (validateInput) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    
    
    const dataIsValid = validateInput(inputState.data) ;
    let hasError = !dataIsValid && inputState.isFocus ;

    const dataChangeHandler = (event) => {
        dispatch({type: 'INPUT', data: event.target.value});
        
    }

    const dataOnBlurHandler = () => {
        dispatch({type: 'BLUR'});
    }
    
    const reset = () => {
        dispatch({type: 'RESET'});
    }

    return {
        data: inputState.data,
        isValid: dataIsValid,
        hasError: hasError,
        dataChangeHandler,
        dataOnBlurHandler,
        reset
    };

}

export default useForm;