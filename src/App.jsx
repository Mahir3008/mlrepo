import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/login';
import Register from './Pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
     {
      path: "/Register",
      element: <Register />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
