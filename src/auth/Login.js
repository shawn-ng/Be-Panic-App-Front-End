import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../api/Api'
import { setToken } from '../api/Auth'

const Login = ({ callback }) => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      if (res.status === 200) {
        setToken(res.data.token)
        callback()
        history.push('/products')
      }
    } catch (err) {
      console.error('error in logging in the user', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }
    setState({ formData })
  }

  return (
    <section>
      <div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter"
          >
            <div>
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={state.formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={state.formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                value="Login"
                className="button is-fullwidth is-danger"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
