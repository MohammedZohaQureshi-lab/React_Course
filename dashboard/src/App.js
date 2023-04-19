import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AdvanceChart from './pages/charts/AdvanceChart';
import EditUser from './pages/edit/EditUser';
import ProductsPage from './pages/product/ProductsPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Home />

    },
    {
      path: '/drillChart', element: <AdvanceChart />

    },
    {
      path: '/editUser', element: <EditUser />

    },
    {
      path: '/products', element: <ProductsPage />

    }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
