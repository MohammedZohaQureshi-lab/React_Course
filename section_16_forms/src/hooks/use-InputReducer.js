import { useReducer } from 'react';
const initialInputState = {
    value: '',
    isTouched: false
}
const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLURR") {
        return { value: state.value, isTouched: true };
    }
    if (action.type === "RESET") {
        return { value: '', isTouched: false };
    }
    return inputStateReducer;
}

const useInputReducer = (validateEnteredValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateEnteredValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({ type: "INPUT", value: event.target.value });
    }
    const inputBlurHandler = event => {
        dispatch({ type: "BLURR" });

    }
    const reset = () => {
        dispatch({ type: "RESET" });
    }
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInputReducer