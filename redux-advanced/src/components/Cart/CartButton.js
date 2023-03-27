import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux'
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleCartHandler = (params) => {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler} >
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
