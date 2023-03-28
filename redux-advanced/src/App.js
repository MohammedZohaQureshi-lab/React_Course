import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { fetchCartData } from './store/cart-actions';
import { sentCartData } from './store/cart-actions'

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.uiStore.cartIsVisible);
  const notifications = useSelector(state => state.uiStore.notification);
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(fetchCartData());

  }, [dispatch])
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed) dispatch(sentCartData(cart));    

  }, [cart, dispatch])

  return (
    <>
      {notifications && <Notification status={notifications.status} title={notifications.title} message={notifications.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
