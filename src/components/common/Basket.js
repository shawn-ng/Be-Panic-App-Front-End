import React, { useState } from 'react'
import RemoveItemAtCheckout from './RemoveItems'

const Basket = () => {
  const [state, setState] = useState()
  return (
    <>
      <div>
        <h1>Basket</h1>
        <div>
          {this.state.items.map((item) => {
            return <RemoveItemAtCheckout item={item} key={item.id} />
          })}
        </div>
      </div>
    </>
  )
}

export default Basket
