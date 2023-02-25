import classes from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm';
const ProductItem = props => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li>
            <div className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <ProductItemForm />
            </div>
        </li>
    )
}

export default ProductItem