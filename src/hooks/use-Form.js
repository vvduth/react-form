import { useState } from "react";

const useForm = (validateInput) => {
    const [enterData, setEnterData] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    
    const dataIsValid = validateInput(enterData) ;
    let hasError = !dataIsValid && isFocus ;

    const dataChangeHandler = (event) => {
        setEnterData(event.target.value);
    }

    const dataOnBlurHandler = () => {
        setIsFocus(true);
    }
    
    const reset = () => {
        setEnterData('');
        setIsFocus(false);
    }

    return {
        data: enterData,
        isValid: dataIsValid,
        hasError: hasError,
        dataChangeHandler,
        dataOnBlurHandler,
        reset
    };

}

export default useForm;