//import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit(event) {
    event.preventDefault()

    const { target: { email: { value: email }, password: { value: password } } } = event

    console.log(email, password)
  }

  return <div className="App">
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="e-mail" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
    </form>
  </div>
}

export default App;
