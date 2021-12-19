import { useState } from "react";
const useInput = (validateValue) => {
    const [eneteredValue, setEnterValue] = useState('');
    const [isTouched,setIsTouched] = useState('');

    const valueIsValid = eneteredValue.trim() !== '';
    const hasError = !valueIsValid && isTouched ;

    const valueChangeHandler = (event) => {
        setEnterValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnterValue('');
        setIsTouched(false);
    }

    return {
        value: eneteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput ;