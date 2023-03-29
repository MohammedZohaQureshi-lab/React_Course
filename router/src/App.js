import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import RootLayout from './pages/Root';
// Alternate route approach 
//const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="products" element={<Products />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)
const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetails /> }
    ]
  }

])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
