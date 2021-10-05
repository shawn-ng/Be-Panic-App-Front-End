import React from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../api/Api'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser(state.formData)
      if (res.status === 200) {
        history.push('login')
      }
    } catch (err) {
      console.log('Error registering the user', err)
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
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter box"
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                  value={state.formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
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

            <div className="field">
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

            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Confirm Password"
                  name="passwordConfirmation"
                  type="password"
                  value={state.formData.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <input
                className="button is-fullwidth is warning"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
