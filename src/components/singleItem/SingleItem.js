import React from 'react'
import styles from './SingleItem.module.css'

// Redux imports
import { connect } from 'react-redux'
import { addToBasket } from '../../redux/shopping/shopping-actions.js'

const SingleItem = ({ current, addToBasket }) => {
  return (
    <div className={styles.SingleItem}>
      <img
        className={styles.SingleItem_image}
        src={current.image}
        alt={current.name}
      />
      <div className={styles.singleItem_details}>
        <p className={styles.details_name}>{current.name}</p>
        <p className={styles.details_description}>{current.description}</p>
        <p className={styles.details_price}>{current.price}</p>

        <button
          onClick={() => addToBasket(current.id)}
          className={styles.details_addButton}
        >
          Add to Basket
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTOBasket: (id) => dispatch(addToBasket(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
