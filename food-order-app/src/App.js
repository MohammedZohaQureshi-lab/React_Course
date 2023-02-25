import { Fragment } from "react";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Products />
    </Fragment>
  );
}

export default App;
