import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../Overlay/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const removeItemHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const addItemHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    return (
        <Modal onClose={props.onClose}>

            <ul>
                {cartCtx.items.map(item => <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={addItemHandler.bind(null, item)}
                    onRemove={removeItemHandler.bind(null, item.id)} />)}
            </ul>
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
                {hasItems && <button className={classes['button']} >Order</button>}
            </div>
        </Modal>
    )
}

export default Cart