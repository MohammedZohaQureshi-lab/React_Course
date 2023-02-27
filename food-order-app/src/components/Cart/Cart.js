import Modal from '../Overlay/Modal';
import classes from './Cart.module.css'

const Cart = props => {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 19.99 },
    { id: 'c2', name: 'Maggi', amount: 2, price: 19.99 }
    ].map(item => <li key={item.id}>{item.name}</li>);
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>35.63</span>
            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
                <button className={classes['button']} >Order</button>
            </div>
        </Modal>
    )
}

export default Cart