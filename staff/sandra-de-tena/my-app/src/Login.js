// //import logo from './logo.svg';
// import './App.css';
// import Login from './Login'

// function App() {

//   function handleLogin() {
//     debugger
//   }

//   return <div className="App">
//     <Login onLogin={handleLogin} />
//   </div>
// }

// export default App;
//---------------------------------------

import './Login.css'
import { login } from './user.service'
import { Component } from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = { error: null }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const { target: { email: { value: email }, password: { value: password } } } = event

    try {
      login(email, password)
        .then(token => {
          sessionStorage.token = token

          this.props.onLogin()
        })
        .catch(({ message }) => {
          this.setState({ error: message })
        })
    } catch ({ message }) {
      this.setState({ error: message })
    }
  }

  render() {
    return <form className="Login" onSubmit={this.handleSubmit}>
      {this.state.error && <p>{this.state.error}</p>}
      <input type="email" name="email" placeholder="e-mail" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
    </form>
  }
}

export default Login