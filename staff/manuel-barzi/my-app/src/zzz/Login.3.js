import './Login.css'
import { login } from '../services/user.service'
import { Component } from 'react'

class Login extends Component {
    state = { error: null }

    handleSubmit = async event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            await login(email, password)

            this.props.onLogin()
        } catch ({ message }) {
            this.setState({ error: message })
        }
    }

    render() {
        const { state: { error }, handleSubmit } = this

        return <>
            <h1>Login</h1>
            <form className="Login" onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <input type="email" name="email" placeholder="e-mail" />
                <input type="password" name="password" placeholder="password" />
                <button>Login</button>
            </form>
        </>
    }
}

export default Login