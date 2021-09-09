import { useState, useEffect } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { retrieve } from '../services/car.service'

function Detail({ id }) {
    const [car, setCar] = useState()

    //const history = useHistory()

    useEffect(() => {
        (async () => {
            try {
                const car = await retrieve(id)

                setCar(car)
            } catch (error) {
                alert(error.message) // TODO improve me!
            }
        })() // IIFE
    }, [id])

    return <>
        <h1>Detail</h1>
        {car && <>
            <h1>{car.name} ({car.id})</h1>
            <img src={car.image} />
            <p>{car.description}</p>
            <span>$ {car.price}</span>
        </>}
    </>
}

export default Detail