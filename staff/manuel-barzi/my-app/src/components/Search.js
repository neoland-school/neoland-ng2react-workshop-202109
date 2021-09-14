import './Search.css'
import { search } from '../services/car.service'
import { useState } from 'react'

function Search({ onDetail }) {
    const [error, setError] = useState()
    const [results, setResults] = useState([])

    const handleSubmit = async event => {
        event.preventDefault()

        const { target: { query: { value: query } } } = event

        try {
            const cars = await search(query)

            setResults(cars)
        } catch ({ message }) {
            setError(message)
        }
    }

    const handleDetail = id => {
        onDetail(id)
    }

    return <>
        <h1>Search</h1>
        <form className="Search" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input type="query" name="query" placeholder="query" />
            <button>Search</button>
        </form>
        {results && results.length && <ul>
                { results.map(({id, name, thumbnail, price})=> <li key={id} onClick={() => handleDetail(id)}>
                    <h2>{name} ({id})</h2>
                    <img src={thumbnail} />
                    <span>$ {price}</span>
                </li>)}
            </ul>}
    </>
}

export default Search