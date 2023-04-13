import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
