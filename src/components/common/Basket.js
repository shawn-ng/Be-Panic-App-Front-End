import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { editProduct } from '../../api/Api.js'
import BasketCard from '../products/BasketCard.js'

const Basket = ({ basket, onCheckOut }) => {
  const history = useHistory()
  const [state, setState] = useState(basket)
  const [total, setTotal] = useState(0)

  const updatingProductsApi = async (id, formData) => {
    try {
      await editProduct(id, formData)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCheckOut = (e) => {
    e.preventDefault()

    if (!window.localStorage.token) {
      history.push('/login')
    } else {
      let productCount = {}
      state.forEach((product) => {
        if (productCount[product._id]) {
          productCount[product._id].stockCount--
        } else {
          productCount[product._id] = { stockCount: product.stockCount - 1 }
        }
      })

      Object.keys(productCount).forEach((product) => {
        updatingProductsApi(product, productCount[product])
      })

      setState([])
      onCheckOut()

      history.push('/')
    }
  }

  React.useEffect(() => {
    let sum = 0
    for (let z = 0; z < state.length; z++) {
      sum += state[z].price
    }
    setTotal(sum)
  }, [])

  return (
    <>
      <div>
        <h1 className="title">Basket</h1>
        <div className="columns is-multiline">
          {state
            ? state.map((product) => {
                return (
                  <BasketCard
                    key={`${product._id}_${Math.random() * state.length}`}
                    brand={product.brand}
                    price={product.price}
                    name={product.name}
                    // imageUrl={product.image.url}
                    stockCount={product.stockCount}
                    _id={product._id}
                    // onItemSelect={onItemSelect}
                  />
                )
              })
            : null}
        </div>
        <hr />
        <div>
          <p>Total: {total ? <strong>{total}</strong> : null}</p>
        </div>
        <hr />
        <button className="button" onClick={handleCheckOut}>
          Checkout
        </button>
      </div>
    </>
  )
}

export default Basket
