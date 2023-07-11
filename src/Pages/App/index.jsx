import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn login={login()} />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/home' element={<Home logout={logout} />} />
        <Route path='/clock' element={<Clock />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


