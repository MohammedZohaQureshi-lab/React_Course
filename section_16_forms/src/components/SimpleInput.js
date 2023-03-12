import { useState } from 'react'
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [inputNameTouched, setInputNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const validNameInput = !enteredNameIsValid && inputNameTouched;

  const emailIsValid = enteredEmail.trim().includes('@');
  const validEmailInput = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid) formIsValid = true

  const inputNameHandler = event => {
    setEnteredName(event.target.value);
    if (validNameInput) return;
  }
  const inputNameBlurrHandler = event => {
    setInputNameTouched(true);
    if (validNameInput) return;
  }

  const emailHandler = event => {
    setEnteredEmail(event.target.value);
    if (validEmailInput) return;
  }
  const emailBlurrHandler = event => {
    setEmailTouched(true);
    if (validEmailInput) return;
  }


  const submitHandler = event => {
    event.preventDefault();
    setInputNameTouched(true);
    if (!enteredNameIsValid && !emailIsValid) return;
    console.log("Submit", enteredName);
    setEnteredName('');
    setEnteredEmail('');
    setInputNameTouched(false);
    setEmailTouched(false);
  }

  const nameFormClasses = validNameInput ? 'form-control invalid' : 'form-control';
  const emailFormClasses = validEmailInput ? 'form-control invalid' : 'form-control';

  return (
    <form>
      <div className={nameFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' value={enteredName} id='name' onChange={inputNameHandler} onBlur={inputNameBlurrHandler} />
      </div>
      {validNameInput && <p className='error-text'>Enter Valid Input</p>}

      <div className={emailFormClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' value={enteredEmail} id='email' onChange={emailHandler} onBlur={emailBlurrHandler} />
      </div>
      {validEmailInput && <p className='error-text'>Enter Email ID </p>}
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
