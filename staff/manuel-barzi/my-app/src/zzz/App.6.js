import './App.css';
import Login from './Login'
import { useState } from 'react'
import Home from './Home'
import Register from './Register'
import { loggedIn } from '../services/user.service'

function App() {
  const [view, setView] = useState(loggedIn() ? 'home' : 'login')

  const handleGotoHome = () => {
    setView('home')
  }

  const handleGoToRegister = () => {
    setView('register')
  }

  const handleGotoLogin = () => {
    setView('login')
  }

  return <div className="App">
    {view === 'login' && <>
      <Login onLogin={handleGotoHome} />
      <button onClick={handleGoToRegister}>Register</button>
    </>}
    {view === 'register' && <Register onRegister={handleGotoLogin} />}
    {view === 'home' && <Home onLogout={handleGotoLogin} />}
  </div>
}

export default App
