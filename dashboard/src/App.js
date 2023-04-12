import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "users",
      element: <Users />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
