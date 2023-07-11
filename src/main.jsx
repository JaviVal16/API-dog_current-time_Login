import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './routes/Login/index.jsx';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import ProtectedRoute from './routes/ProtectedRoute/index.jsx';
import AuthProvider from './auth/AuthProvider.jsx';
import DogAttributes from './routes/DogAttributes/index.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/:name',
        element: <DogAttributes />,
      },
    ]

  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
