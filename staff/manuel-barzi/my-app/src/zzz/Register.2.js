import './Register.css'
import { register } from '../services/user.service'
import { Component } from 'react'

class Register extends Component {
    state = { error: null }

    handleSubmit = async event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            await register(name, email, password)

            this.props.onRegister()
        } catch ({ message }) {
            this.setState({ error: message })
        }
    }

    render() {
        const { state: { error }, handleSubmit } = this

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
}

export default Register