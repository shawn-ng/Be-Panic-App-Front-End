import React, { useState } from 'react'
import RemoveItemAtCheckout from './RemoveItems'

const Basket = ({ basket }) => {
  const [state, setState] = useState(basket)
  console.log('basket state is', state)
  return (
    <>
      <div>
        <h1>Basket</h1>
        <div>
          {state.map((item) => {
            return <RemoveItemAtCheckout item={item} key={item.id} />
          })}
        </div>
      </div>
    </>
  )
}

export default Basket
