import './Register.css'
import { register } from '../services/user.service'
import { useState } from 'react'

function Register({ onRegister }) {
    const [error, setError] = useState()

    const handleSubmit = async event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            await register(name, email, password)

            onRegister()
        } catch ({ message }) {
            setError(message)
        }
    }

    return <>
        <h1>Register</h1>
        <form className="Register" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Register</button>
        </form>
    </>
}

export default Register