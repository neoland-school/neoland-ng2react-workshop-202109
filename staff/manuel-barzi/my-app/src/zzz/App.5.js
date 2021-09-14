import './App.css';
import Login from './Login'
import { useState } from 'react'
import Home from './Home'
import Register from './Register'
import { loggedIn as _loggedIn } from '../services/user.service'

function App() {
  const [loggedIn, setLoggedIn] = useState(_loggedIn())
  const [register, setRegister] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleGoToRegister = () => {
    setRegister(true)
  }

  const handleRegister = () => {
    setRegister(false)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return <div className="App">
    {!loggedIn && !register && <>
      <Login onLogin={handleLogin} />
      <button onClick={handleGoToRegister}>Register</button>
    </>}
    {register && <Register onRegister={handleRegister} />}
    {loggedIn && <Home onLogout={handleLogout} />}
  </div>
}

export default App
