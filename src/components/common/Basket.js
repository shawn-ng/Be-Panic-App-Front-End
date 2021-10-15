import React, { useEffect, useState } from 'react'
import BasketCard from '../products/BasketCard'

const Basket = ({ basket }) => {
  const [state, setState] = useState(basket)
  const [total, setTotal] = useState(0)
  console.log('basket state is', state)

  useEffect(() => {
    let sum = 0
    for (let z = 0; z < state.length; z++) {
      sum += state[z].price
    }
    setTotal(sum)
  }, [])

  console.log(total) + 5

  return (
    <>
      <h1 className="title">Basket</h1>
      <div className="columns is-multiline">
        <p></p>
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
      <button className="button">Checkout</button>
    </>
  )
}

export default Basket
