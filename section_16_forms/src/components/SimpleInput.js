import useInput from '../hooks/use-input';
const SimpleInput = (props) => {

  const { value: enteredInputName,
    inputValueHandler: inputNameHandler, setInputIsTouched: nameInputIsTouched,
    inputValueBlurrHandler: inputNameBlurrHandler,
    hasError: inputNameHasError, enteredValueIsValid: enteredNameValueIsValid,
    reset: resetNameInput } = useInput((enteredInputName) => enteredInputName.trim() !== '');

  const { value: enteredEmail,
    inputValueHandler: emailHandler, setInputIsTouched: emailInputIsTouched,
    inputValueBlurrHandler: emailBlurrHandler,
    hasError: emailHasError, enteredValueIsValid: enteredEmailValueIsValid,
    reset: resetEmailInput } = useInput((enteredEmail) => enteredEmail.includes('@'));

  let formIsValid = false;
  if (enteredNameValueIsValid && enteredEmailValueIsValid) formIsValid = true;

  const submitHandler = event => {
    event.preventDefault();
    nameInputIsTouched(true);
    emailInputIsTouched(true);
    if (formIsValid) return;
    resetNameInput();
    resetEmailInput();
  }

  const nameFormClasses = inputNameHasError ? 'form-control invalid' : 'form-control';
  const emailFormClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' value={enteredInputName} id='name' onChange={inputNameHandler} onBlur={inputNameBlurrHandler} />
      </div>
      {inputNameHasError && <p className='error-text'>Enter Valid Input</p>}

      <div className={emailFormClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' value={enteredEmail} id='email' onChange={emailHandler} onBlur={emailBlurrHandler} />
      </div>
      {emailHasError && <p className='error-text'>Enter Email ID </p>}
      <div className="form-actions">
        <button disabled={!formIsValid} type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
