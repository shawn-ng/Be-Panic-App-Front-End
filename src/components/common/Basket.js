import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { editProduct } from '../../api/Api.js'
import BasketCard from '../products/BasketCard.js'
// import ConfirmationPage from './ConfirmationPage.js'

const Basket = () => {
  const history = useHistory()
  const basket = window.localStorage.getItem('basket')
  const [state, setState] = useState(JSON.parse(basket))
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

      history.push('/confirmation')
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
      <section className="hero is-fullheight has-background-black">
        <div>
          <h1 className="title mx-5 has-text-danger-dark">Basket</h1>
          <div className="columns">
            <div className="column">
              {state.map((product) => {
                return (
                  <BasketCard
                    key={product._id}
                    brand={product.brand}
                    price={product.price}
                    name={product.name}
                    stockCount={product.stockCount}
                    _id={product._id}
                  />
                )
              })}
            </div>
          </div>
          <hr />
          <div className="column is-offset-9">
            <p className="has-text-danger-dark">
              Total: {total ? <p>£{total}</p> : null}
            </p>
          </div>
          <hr />
          <div className="column is-offset-9">
            <button
              className="button is-large is-warning is-rounded is-outlined"
              onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Basket
