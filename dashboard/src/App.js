import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AdvanceChart from './pages/charts/AdvanceChart';
import EditUser from './pages/edit/EditUser';
import ProductsPage from './pages/product/ProductsPage'
import Map from './components/map/Map';

function App() {
  const location = {
    address: 'INDIA',
    lat: 20.5937,
    lng: 78.9629,
  }
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

    },
    {
      path: '/map', element: <Map location={location} zoomLevel={7} />

    }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
