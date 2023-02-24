import React, { useRef, useImperativeHandle } from 'react'
import classes from './input.module.css'
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    const focusHandler = () => {
        return inputRef.current.focus();
    }
    useImperativeHandle(
        ref,
        () => {
            return { activateFocus: focusHandler };
        }
    )
    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.changeHandler}
                onBlur={props.blurHandler}
            /></div>
    )
})

export default Input;