import React from 'react'
import { useHistory } from 'react-router'
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
    e.preventDefualt()

    try {
      const res = await registerUser(state.formData)
      if (res.status === 200) {
        history.push('login')
      }
    } catch (err) {
      console.log('Error registering the user', err)
    }

    const handleChange = (e) => {
      const formData = {
        ...state.formData,
        [e.target.name]: e.target.value,
      }
    }
    setState({ formData })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="">
          <form onSubmit="column is-half is-offset-one-quarter box">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="username"
                  name="name"
                  value={state.formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
