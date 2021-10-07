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
        <section>
          <div>
            <h2>{state.product.name}</h2>
            <hr />

            <div>
              <div>
                <h4>
                  <span>Name</span>
                </h4>
                <hr />
                <p>{state.product.name}</p>
                <hr />
                <h4>
                  <span>Brand</span>
                  <hr />
                </h4>
                <p>{state.product.brand}</p>
                <hr />
                <h4>
                  <span>Info</span>
                  <hr />
                </h4>
                <p>{state.product.productInfo}</p>
                <hr />
                <h4>
                  <span>Description</span>
                  <hr />
                </h4>
                <p>{state.product.itemDescription}</p>
                <hr />
                <h4>
                  <span>Image</span>
                  <hr />
                </h4>
                <figure>
                  <img src={state.product.image.url} alt="product" />
                </figure>
                <hr />
                <Link to={`/product/${id}/edit`} className="button is-info">
                  Edit Product
                </Link>
                <button className="button is-info" onClick={handleDelete}>
                  Delete product
                </button>
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
