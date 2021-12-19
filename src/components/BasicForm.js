import useForm from "../hooks/use-Form";

const BasicForm = (props) => {

  const  {
    data: enteredFirstName,
    isValid: firstNameIsValid  ,
    hasError: firstNameHasError ,
    dataChangeHandler: firstNameChangeHandler ,
    dataOnBlurHandler: firstNameOnBlurHandler,
    reset: resetFirstName,

  } = useForm(value => value.trim() !== '');

  const  {
    data: enteredLastName,
    isValid: lastNameIsValid  ,
    hasError: lastNameHasError ,
    dataChangeHandler: lastNameChangeHandler ,
    dataOnBlurHandler: lastNameOnBlurHandler,
    reset: resetlastName,

  } = useForm(value => value.trim() !== '');

  const {
    data: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    dataChangeHandler: emailChangeHandler,
    dataOnBlurHandler: emailBlurHandler,
    reset: resetEmailInput
   } = useForm(value => value.includes('@'));

   let formIsValid = false ;

   if (enteredEmailIsValid && lastNameIsValid && firstNameIsValid) {
     formIsValid = true ;
   }

   const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
   const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
   const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  const onSubmitHanlder = (event) => {

    event.preventDefault();
    console.log(firstNameIsValid);
    console.log(lastNameIsValid);
    console.log(enteredEmailIsValid);
    console.log(emailInputHasError);

    if (!firstNameIsValid || !lastNameIsValid || !enteredEmailIsValid) {
      return ;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstName();
    resetlastName();
    resetEmailInput();
  }

  return (
    <form onSubmit= {onSubmitHanlder}>
      <div className={firstNameInputClasses}>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
                type='text' 
                id='name' 
                onChange={firstNameChangeHandler}
                onBlur = {firstNameOnBlurHandler}
                value={enteredFirstName}  
              />
          {firstNameHasError && <p>Don't leave the name empty motherfucker</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
              type='text' 
              id='name' 
              onChange={lastNameChangeHandler}
              onBlur = {lastNameOnBlurHandler}
              value={enteredLastName}           
          />
          {lastNameHasError && <p>Don't leave the name empty motherfucker</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' id='email' 
          onChange={emailChangeHandler} 
          onBlur = {emailBlurHandler}
          value={enteredEmail}
          />
          {emailInputHasError && <p>Don't leave the email invalid motherfucker</p>}
      </div>
      <div className='form-actions'>
        <button disabled= {!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
