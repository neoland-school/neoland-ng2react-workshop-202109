// //import logo from './logo.svg';
// import './App.css';

// function App() {
//   function handleSubmit(event) {
//     event.preventDefault()

//     const { target: { email: { value: email }, password: { value: password } } } = event

//     console.log(email, password)
//   }

//   return <div className="App">
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="e-mail" />
//       <input type="password" name="password" placeholder="password" />
//       <button>Login</button>
//     </form>
//   </div>
// }

// export default App;

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
      {!this.state.loggedIn && !this.state.register && <Login onLogin={this.handleLogin} />}
      {this.state.loggedIn && <Home />}
      {!this.state.loggedIn && !this.state.register && <button onClick={this.handleGoToRegister}>Register</button>}
      {this.state.register && <Register />}
    </div>
  }
}

export default App;
