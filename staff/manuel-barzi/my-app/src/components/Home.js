import { useState, useEffect } from 'react'
import { retrieve, logout } from '../services/user.service'

function Home({onLogout}) {
    const [user, setUser] = useState()

    useEffect(() => {
        (async () => {
            try {
                const user = await retrieve()

                setUser(user)
            } catch (error) {
                alert(error.message) // TODO improve me!
            }
        })() // IIFE
    }, [])

    const handleLogout = () => {
        logout()

        onLogout()
    }

    return <>
        {user && <>
            <h1>Hello {user.name}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </>}
    </>
}

export default Home