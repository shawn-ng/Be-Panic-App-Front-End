import React, { useState, useEffect } from 'react'
import styles from './Basket.module.css'
import { getSingleProduct } from '../../api/Api.js'
import BasketItem from '../basketItem/BasketItem.js'

// Redux imports
import { connect } from 'react-redux'

const Basket = ({ basket }) => {
  console.log('xyz', basket)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  // unsure if this is the right way to do this
  const [state, setState] = React.useState({ item: null })

  const getSingleProductFromApi = async () => {
    console.log('the id', id)
    try {
      const res = await getSingleProduct(id) // id undefined
      setState({ item: res.data })
    } catch (err) {
      console.error(`An error occurred fetching the product ${id}`, err)
    }
  }

  React.useEffect(() => {
    getSingleProductFromApi() // will crash here
  }, [])

  useEffect(() => {
    let items = 0
    let price = 0

    basket.forEach((item) => {
      console.log('basket for each item', item)
      items += item.qty // qty fails here
      price += item.qty * item.price
    })

    setTotalItems(items)
    console.log('this item is in the useEffect', item)
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
