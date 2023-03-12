import { useState } from 'react'

const useInput = (validateEnteredValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const enteredValueIsValid = validateEnteredValue(enteredValue);
    const hasError = !enteredValueIsValid && inputIsTouched;

    const inputValueHandler = event => {
        setEnteredValue(event.target.value);
        if (hasError) return;
    }
    const inputValueBlurrHandler = event => {
        setInputIsTouched(true);
        if (hasError) return;
    }
    const reset = () => {
        setEnteredValue('');
        setInputIsTouched(false);
    }
    return { value: enteredValue,setInputIsTouched, inputValueHandler, inputValueBlurrHandler, hasError, enteredValueIsValid, reset }
}

export default useInput