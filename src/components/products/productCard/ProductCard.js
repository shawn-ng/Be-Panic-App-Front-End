import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

// Redux imports
import { connect } from 'react-redux'
import {
  loadCurrentItem,
  addToBasket,
} from '../../../redux/shopping/shopping-actions.js'

const ProductCard = ({ product, addToBasket, loadCurrentItem }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product_image}
        src={product.image}
        alt={product.name}
      />

      <div className={styles.product_details}>
        <p className={styles.details_name}>{product.name}</p>
        <p className={styles.details_description}>{product.description}</p>
        <p className={styles.details_price}>{product.price}</p>
      </div>

      <div className={styles.product_buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons_button} ${styles.buttons_view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToBasket(product.id)}
          className={`${styles.buttons_button} ${styles.buttons_add}`}
        >
          Add to Basket
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (id) => dispatch(addToBasket(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(ProductCard)

// MVP
// Load Product Card with details
