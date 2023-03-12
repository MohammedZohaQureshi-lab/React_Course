import { useState } from 'react'
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const validInput = !enteredNameIsValid && inputTouched;
  const inputHandler = event => {
    setEnteredName(event.target.value);
    if (validInput) return;
  }
  const inputBlurrHandler = event => {
    setInputTouched(true);
    if (validInput) return;
  }



  const submitHandler = event => {
    event.preventDefault();
    setInputTouched(true);
    if (!enteredNameIsValid) return;
    console.log("Submit", enteredName);
    setEnteredName('');
    setInputTouched(false);
  }

  const formClasses = validInput ? 'form-control invalid' : 'form-control';

  return (
    <form>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' value={enteredName} id='name' onChange={inputHandler} onBlur={inputBlurrHandler} />
      </div>
      {validInput && <p className='error-text'>Enter Valid Input</p>}
      <div className="form-actions">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
