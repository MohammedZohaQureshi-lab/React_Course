import InputElement from '../../UI/InputElement'
import classes from './ProductItemForm.module.css'

const ProductItemForm = () => {
    return (
        <form className={classes.form} >
            <InputElement label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default ProductItemForm