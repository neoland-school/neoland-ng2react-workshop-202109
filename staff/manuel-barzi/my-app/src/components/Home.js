import { useState, useEffect } from 'react'
import { retrieve, logout } from '../services/user.service'
import Search from './Search'
import { useHistory, Route } from 'react-router-dom'
import Detail from './Detail'

function Home({onLogout}) {
    const [user, setUser] = useState()

    const history = useHistory()

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

    const handleGotoDetail = id => {
        history.push(`/home/cars/${id}`)
    }

    return <>
        {user && <>
            <h1>Hello {user.name}!</h1>
            <button onClick={handleLogout}>Logout</button>

            <Search onDetail={handleGotoDetail} />
        </>}

        <Route path="/home/cars/:id" render={props => <Detail id={props.match.params.id} />} />
    </>
}

export default Home