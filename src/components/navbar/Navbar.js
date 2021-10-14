import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = ({ basket }) => {
  const [basketCount, setBasketCount] = useState(0)

  useEffect(() => {
    let count = 0
    basket.forEach((item) => {
      count += item.qty
    })

    setBasketCount(count)
  }, [basket, basketCount])

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar_logo}>Paniccc Basket</h2>
      </Link>
      <Link to="/basket">
        <div className={styles.navbar_basket}>
          <h3 className={styles.basket_title}>Basket</h3>
          <img
            className={styles.basket_image}
            src="https://w7.pngwing.com/pngs/27/203/png-transparent-shopping-cart-shopping-basket-rectangle-shopping-bags-trolleys-storage-basket.png"
            alt="shopping basket"
          />
          <div className={styles.basket_counter}>{basketCount}</div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar

// MVP
// * Have basket icon top right
// * Have a basket counter that syncs with customer selection
