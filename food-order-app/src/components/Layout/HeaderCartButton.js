import { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [buttonHighlighted, setButtonHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => (currentNumber + item.amount), 0);
    const btnClass = `${classes.button} ${buttonHighlighted && classes.bump}`;

    useEffect(() => {
        if (items.length === 0) return
        setButtonHighlighted(true);
        const timer = setTimeout(() => {
            setButtonHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <button className={btnClass} onClick={props.clickCart}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton