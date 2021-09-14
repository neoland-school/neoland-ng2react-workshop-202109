import './App.css';
import Login from './Login'
import { Component } from 'react'
import Home from './Home'
import Register from './Register'
import { loggedIn } from '../services/user.service'

class App extends Component {
  constructor() {
    super()

    this.state = { loggedIn: loggedIn(), register: false }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleGoToRegister = this.handleGoToRegister.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleLogin() {
    this.setState({ loggedIn: true })
  }

  handleGoToRegister() {
    this.setState({ register: true })
  }

  handleRegister() {
    this.setState({ register: false })
  }

  handleLogout = () => {
    this.setState({ loggedIn: false })
  }

  render() {
    const { state: { loggedIn, register }, handleLogin, handleGoToRegister, handleRegister, handleLogout } = this

    return <div className="App">
      {!loggedIn && !register && <>
        <Login onLogin={handleLogin} />
        <button onClick={handleGoToRegister}>Register</button>
      </>}
      {register && <Register onRegister={handleRegister} />}
      {loggedIn && <Home onLogout={handleLogout} />}
    </div>
  }
}

export default App;
