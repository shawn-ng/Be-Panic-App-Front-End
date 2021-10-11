import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import { removeToken, getPayload } from '../../api/Auth.js'

const NavBar = () => {
  const location = useLocation()
  const [roleState, setRoleState] = React.useState()

  const handleClick = () => {
    removeToken()
  }

  const fetchingRoleType = async () => {
    try {
      const roleType = await getPayload()

      setRoleState(roleType.role)
    } catch (err) {
      console.log('Fetching Role Error:', err)
    }
  }
  React.useEffect(() => {
    fetchingRoleType()
  }, [])

  return (
    <div className="navbar is-dark">
      <nav className="navbar-menu is-fullwidth is-dark">
        <div className="container">
          <div className="navbar-brand is-dark">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/products" className="navbar-item">
              Products
            </Link>
            <Link to="/search" className="navbar-item">
              Search
            </Link>

            <div className="navbar-end">
              <Link to="/basket" className="navbar-item">
                🧺 Basket
              </Link>
              {roleState === 'super admin' && window.localStorage.token ? (
                <Link to="/superAdmin" className="navbar-item">
                  Users
                </Link>
              ) : null}
              {roleState === 'admin' && window.localStorage.token ? (
                <Link to="/admin" className="navbar-item">
                  Admin
                </Link>
              ) : null}
              {window.localStorage.token ? (
                <Link
                  to={{
                    pathname: '/login',
                  }}
                  className="navbar-item"
                  onClick={handleClick}
                >
                  LogOut
                </Link>
              ) : (
                <>
                  <Link to="/register" className="navbar-item">
                    Register
                  </Link>
                  <Link to={{ pathname: '/login' }} className="navbar-item">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
