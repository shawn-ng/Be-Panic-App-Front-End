import React, { useState } from 'react'
import styles from './basketItem/BasketItem.module.css'

// Redux imports

import { connect } from 'react-redux'
import {
  adjustItemQty,
  removeFromBasket,
} from '../../redux/shopping/shopping-actions.js'

const BasketItem = ({ item, adjustQty, removeFromBasket }) => {
  const [input, setInput] = useState(item.qty)

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    adjustQty(item.id, e.target.value)
  }

  return (
    <div className={styles.basketItem}>
      <img
        className={styles.basketItem_image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.basketItem_details}>
        <p className={styles.details_title}>{item.title}</p>
        <p className={styles.details_desc}>{item.description}</p>
        <p className={styles.details_price}>£ {item.price}</p>
      </div>
      <div className={styles.basketItem_actions}>
        <div className={styles.basketItem_qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromBasket(item.id)}
          className={styles.actions_deleteItemButton}
        >
          <img
            src="https://img.favpng.com/25/22/19/rubbish-bins-waste-paper-baskets-recycling-bin-computer-icons-png-favpng-WWUqTB6vFc2RA8PHwZd2yPG3r.jpg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromBasket: (id) => dispatch(removeFromBasket(id)),
  }
}

export default connect(null, mapDispatchToProps)(BasketItem)

// MVP:
// * See the item
// * See item details (Name / Description / Price)
// * Be able to adjust qty
// * Be able to delete item from basket
