import React, { useState, useEffect } from 'react'
import styles from './Basket.module.css'

// Redux imports
import { connect } from 'react-redux'

import BasketItem from './BasketItem/BasketItem'

const Basket = ({ basket }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    let items = 0
    let price = 0

    basket.forEach((item) => {
      items += item.qty
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [basket, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <div className={styles.basket}>
      <div className={styles.basket_items}>
        {basket.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.basket_summary}>
        <h4 className={styles.summary_title}>Basket Summary</h4>
        <div className={styles.summary_price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>£ {totalPrice}</span>
        </div>
        <button className={styles.summary_checkoutButton}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    basket: state.shop.basket,
  }
}

export default connect(mapStateToProps)(Basket)

// MVP
// * Sync qty & price
// * Proceed to Checkout button
