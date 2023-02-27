import { Fragment, useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header clickCart={showCartHandler} />
      <Products />
    </Fragment>
  );
}

export default App;
