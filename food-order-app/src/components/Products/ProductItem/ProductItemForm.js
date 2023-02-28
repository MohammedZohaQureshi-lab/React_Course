import { useRef, useState } from 'react'
import InputElement from '../../UI/InputElement'
import classes from './ProductItemForm.module.css'

const ProductItemForm = (props) => {
    const [amountIsValid,setAmountIsValid]=useState(true)
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmountNumber === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        };        
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <InputElement label='Amount'
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
                {!amountIsValid && <p>Please Enter a valid amount (1-5).</p>}
            <button>+ Add</button>
        </form>
    )
}

export default ProductItemForm