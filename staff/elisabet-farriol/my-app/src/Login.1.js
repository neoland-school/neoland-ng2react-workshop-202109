import './Login.css'
import { login } from './user.service'

function Login() {
    function handleSubmit(event) {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            login(email, password)
        } catch(error) {
            alert(error.message)
        }
    }

    return <form className="Login" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
    </form>
}

export default Login