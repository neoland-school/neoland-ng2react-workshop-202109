import './App.css';
import Login from './Login'
import Home from './Home'
import Register from './Register'
import { loggedIn } from '../services/user.service'
import { Route, Redirect, Link, useHistory } from 'react-router-dom'

function App() {
  const history = useHistory()

  const handleGotoHome = () => {
    history.push('/home')
  }

  const handleGotoLogin = () => {
    history.push('/login')
  }

  return <div className="App">
    <Route path="/login" render={() => loggedIn() ? <Redirect to="/home" /> : <>
      <Login onLogin={handleGotoHome} />

      <Link to="/register"><button>Register</button></Link>
    </>} />

    <Route path="/register" render={() => loggedIn() ? <Redirect to="/home" /> : <>
      <Register onRegister={handleGotoLogin} />

      <Link to="/login"><button>Login</button></Link>
    </>} />

    <Route path="/home" render={() => loggedIn() ? <Home onLogout={handleGotoLogin} /> : <Redirect to="/login" />} />

    <Route path="/hello/:name" render={props => <h1>Hello {props.match.params.name}!</h1>} />
  </div>
}

export default App
