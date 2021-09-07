import { register } from './user.service'
import { Component } from 'react'
import './Register.css'

class Register extends Component {
    constructor() {
        super()

        this.state = { error: null }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        const { target: { name: {value: name}, email: { value: email }, password: { value: password } } } = event

        try {
            register(name, email, password)
                .then(token => {
                    sessionStorage.token = token

                    this.props.onLogin()
                })
                .catch(({ message }) => {
                    this.setState({ error: message })
                })
        } catch ({message}) {
            this.setState({ error: message })
        }
    }

    render() {
        return <form className="register" onSubmit={this.handleSubmit}>
            {this.state.error && <p>{this.state.error}</p>}
            <input type="name" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Login</button>
        </form>
    }
}

export default Register