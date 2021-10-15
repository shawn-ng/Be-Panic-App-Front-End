import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getSingleProduct, deleteProduct } from '../../api/Api.js'
import Loading from './Loading'
// import { getPayload } from '../../api/Auth'

const ShowProduct = () => {
  const { id } = useParams()
  const history = useHistory()
  // set product to null to then change state when selecting a product
  const [state, setState] = React.useState({ product: null })

  const getSingleProductFromApi = async () => {
    try {
      const res = await getSingleProduct(id)
      setState({ product: res.data })
      console.log('this is the data', res.data)
      console.log('state test', state)
    } catch (err) {
      console.error(`An error occurred fetching the product ${id}`, err)
    }
  }

  React.useEffect(() => {
    getSingleProductFromApi()
  }, [])

  //   need to update with Heng's user model
  // and add restriction to edit and delete functionality

  const handleDelete = async () => {
    const productIdToDelete = id
    try {
      await deleteProduct(productIdToDelete)
      history.push('/products')
    } catch (err) {
      console.error(`Failed to delete product ${id}`, err)
    }
  }

  //   console.log('testing image', state.product.image.url)

  return (
    <>
      {state.product ? (
        <section className="hero is-fullheight has-background-danger-light">
          <div className="container">
            <h2 className="title has-text-centered">{state.product.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={state.product.image.url} alt="product" />
                </figure>
              </div>

              <div className="columns mx-3">
                <div className="column is-half">
                  <h4 className="title is-4"></h4>
                  <hr />
                  <p>{state.product.name}</p>
                  <hr />
                  <p>By {state.product.brand}</p>
                  <hr />
                  <p>{state.product.productInfo}</p>
                  <hr />
                  <p>{state.product.itemDescription}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ShowProduct
