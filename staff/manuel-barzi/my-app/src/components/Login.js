import './Login.css'
import { login } from '../services/user.service'
import { useState } from 'react'

function Login({ onLogin }) {
    const [error, setError] = useState()

    const handleSubmit = async event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            await login(email, password)

            onLogin()
        } catch ({ message }) {
            setError(message)
        }
    }

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

export default Login