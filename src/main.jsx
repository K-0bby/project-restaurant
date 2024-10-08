import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import App from './pages/App.jsx'
import './index.css'
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Records from './pages/Records.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  { 
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/records",
    element: <Records/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
