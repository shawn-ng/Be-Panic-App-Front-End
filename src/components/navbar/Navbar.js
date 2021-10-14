import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import styles from './Navbar.module.css'
import { removeToken, getPayload } from '../../api/Auth.js'
import logo from '../images/logo.jpg'

// Redux imports
import { connect } from 'react-redux'

const Navbar = ({ basket }) => {
  const location = useLocation()
  const [roleState, setRoleState] = React.useState()
  const [basketCount, setBasketCount] = useState(0)

  const handleClick = () => {
    removeToken()
  }
  useEffect(() => {
    let count = 0
    basket.forEach((item) => {
      count += item.qty
    })

    setBasketCount(count)
  }, [basket, basketCount])

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
    <div className={styles.navbar}>
      <img src={logo} alt={logo} className="image is-64x64" />
      <Link to="/" className="navbar-item">
        Home
      </Link>
      {/* <Link to="/">
        <h2 className={styles.navbar_logo}>Paniccc Basket</h2>
      </Link> */}
      <Link to="/products" className="navbar-item">
        Products
      </Link>
      {/* <Link to="/basket">
        <div className={styles.navbar_basket}>
          <h3 className={styles.basket_title}>Basket</h3>
          <img
            className={styles.basket_image}
            src="https://w7.pngwing.com/pngs/27/203/png-transparent-shopping-cart-shopping-basket-rectangle-shopping-bags-trolleys-storage-basket.png"
            alt="shopping basket"
          />
          <div className={styles.basket_counter}>{basketCount}</div>
        </div>
      </Link> */}
      <div className="navbar-end">
        <Link to="/basket" className="navbar-item">
          🧺 Basket
          <div className={styles.basket_counter}>{basketCount}</div>
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
  )
}

const mapStateToProps = (state) => {
  return {
    basket: state.shop.basket,
  }
}

export default connect(mapStateToProps)(Navbar)

// MVP
// * Have basket icon top right
// * Have a basket counter that syncs with customer selection
