//import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { Component } from 'react'
import Home from './Home'
import Register from './Register'

class App extends Component {
  constructor() {
    super()

    this.state = { loggedIn: false, register: false }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleGoToRegister = this.handleGoToRegister.bind(this)
  }

  handleLogin() {
    this.setState({ loggedIn: true })
  }

  handleGoToRegister() {
    this.setState({ register: true })
  }

  render() {
    return <div className="App">
      { !this.state.loggedIn && !this.state.register && <Login onLogin={this.handleLogin} /> }
      { this.state.loggedIn && <Home /> }
      { !this.state.loggedIn && !this.state.register && <button onClick={this.handleGoToRegister}>Register</button> }
      { this.state.register && <Register /> }
    </div>
  }
}

export default App;