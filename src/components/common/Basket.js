import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { editProduct } from '../../api/Api.js'

const Basket = ({ basket, onCheckOut }) => {
  const history = useHistory()

  const [state, setState] = useState(basket)

  const updatingProductsApi = async (id, formData) => {
    try {
      await editProduct(id, formData)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCheckOut = (e) => {
    e.preventDefault()

    if (!state) {
      alert('Basket is empty')
    }

    state.forEach((product) => {
      let updatedData = {
        stockCount: product.stockCount - 1,
      }
      updatingProductsApi(product._id, updatedData)
      console.log(product)
    })

    setState([])
    onCheckOut()

    history.push('/')
  }
  return (
    <>
      <div>
        <h1>Basket</h1>

        <div></div>
        <button onClick={handleCheckOut}>Checkout</button>
      </div>
    </>
  )
}

export default Basket
