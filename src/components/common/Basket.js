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
          {state.map((product) => {
            return (
              <BasketCard
                key={product._id}
                brand={product.brand}
                price={product.price}
                name={product.name}
                // imageUrl={product.image.url}
                stockCount={product.stockCount}
                _id={product._id}
                // onItemSelect={onItemSelect}
              />
            )
          })}
        </div>
        <hr />
        <p>Total: {total ? <p>{total}</p> : null}</p>
        <hr />
        <button className="button" onClick={handleCheckOut}>
          Checkout
        </button>
      </div>
    </>
  )
}

export default Basket
