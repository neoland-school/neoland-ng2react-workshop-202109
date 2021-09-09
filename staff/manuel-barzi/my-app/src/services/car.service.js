export function search(query) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not string`)
    if (!query.trim().length) throw new Error(`query ${query} is empty or blank`)

    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)
        .then(res => {
            if (res.ok)
                return res.json()
                    .then(data => data)
            else {
                if (res.status >= 400 && res.status < 500)
                    return res.json()
                        .then(data => {
                            const { error } = data

                            throw new Error(error)
                        })
                else
                    throw new Error('server error')
            }
        })
}

export function retrieve(id) {
    if (typeof id !== 'string') throw new TypeError(`${id} is not string`)
    if (!id.trim().length) throw new Error(`id ${id} is empty or blank`)

    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
        .then(res => {
            if (res.ok)
                return res.json()
                    .then(data => data)
            else {
                if (res.status >= 400 && res.status < 500)
                    return res.json()
                        .then(data => {
                            const { error } = data

                            throw new Error(error)
                        })
                else
                    throw new Error('server error')
            }
        })
}