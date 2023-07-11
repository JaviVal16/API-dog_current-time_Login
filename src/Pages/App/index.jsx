import { BrowserRouter, useRoutes } from 'react-router-dom';

import SignIn from '../SignIn/'
import Home from '../Home';
import Clock from '../Clock';
import NotFound from '../NotFound';

import './App.css'
import { useState } from 'react';


function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: 'Jhon'
    })
  }

  const logout = () => setUser(null)

  const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/clock',
        element: <Clock />
      },
      {
        path: '/',
        element: <SignIn />
      },
      {
        path: '/*',
        element: <NotFound />
      },
    ]);
    return routes;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App


