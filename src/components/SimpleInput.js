import { useState} from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  
  const {
         value: enteredName, 
         isValid: enteredNameIsValid ,
         hasError: nameInputHasError, 
         valueChangeHandler: nameChangeHandler, 
         inputBlurHandler: nameBlurHandler,
         reset: resetNameInput
        } = useInput(value => value.trim() !== '');

  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEmailTouched] = useState('');

  
  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched ;

  let formIsValid = false;
  

  
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true ;
  } ;

  

  
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = event => {
    setEmailTouched(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault() ;
    
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return ;
    }
    
    
    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput() ;
    
    setEnteredEmail('');
    setEmailTouched(false);

    // ref always have current property. 
    // instant validation => state
    // only want the submiting value => (ref is better)
    // onBlur when some compo lost focus
  };

  

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmitHandler}>
      <div className= {nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' id='name' 
          onChange={nameChangeHandler} 
          onBlur = {nameBlurHandler}
          value={enteredName}
          />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className= {emailInputClasses}>
        <label htmlFor='name'>Your Email:</label>
        <input 
          type='email' id='email' 
          onChange={emailInputChangeHandler} 
          onBlur = {emailInputBlurHandler}
          value={enteredEmail}
          />
        {emailInputIsInvalid && <p className="error-text">Email is not valid.</p>}
      </div>

      <div className="form-actions">
        <button disabled= {!formIsValid}>Submit</button>
      </div>

    </form>
  );
};

export default SimpleInput;
