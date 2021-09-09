import { Component } from 'react'
import { retrieve, logout } from '../services/user.service'

class Home extends Component {
    state = { user: null }

    async componentWillMount() {
        try {
            const user = await retrieve()

            this.setState({ user })
        } catch (error) {
            alert(error.message) // TODO improve me!
        }
    }

    handleLogout = () => {
        logout()

        this.props.onLogout()
    }

    render() {
        const { state: { user }, handleLogout } = this

        return <>
            {user && <>
                <h1>Hello {user.name}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </>}
        </>
    }
}

export default Home