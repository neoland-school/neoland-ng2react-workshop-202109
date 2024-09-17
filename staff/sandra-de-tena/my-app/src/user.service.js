import { validateEmail } from './utils'

export function login(email, password) {
  if (typeof email !== 'string') throw new TypeError(`${email} is not string`)
  if (!validateEmail(email)) throw new Error(`${email} is not an e-mail`)
  if (typeof password !== 'string') throw new TypeError(`${password} is not string`)
  if (!password.trim().length) throw new Error(`password ${password} is empty or blank`)

  //console.log('call api for auth', email, password)

  return fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: email, password })
  })
    .then(res => {
      if (res.ok)
        return res.json()
          .then(res => {
            const { token } = res

            return token
          })
      else {
        if (res.status >= 400 && res.status < 500)
          return res.json()
            .then(res => {
              const { error } = res

              throw new Error(error)
            })
        else
          throw new Error('server error')
      }
    })
}

export function register(name, email, password) {
  // TODO input validation

  // TODO call api to register user (endpoint https://b00tc4mp.herokuapp.com/api/v2/users)
}