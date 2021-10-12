import React from 'react'
import { getAdminProduct } from '../../api/AdminAPI'

const AdminView = () => {
  const [productState, setProductState] = React.useState()

  // fetching the seller products
  const fetchingProduct = async () => {
    try {
      const products = await getAdminProduct()

      setProductState(products.data)

      console.log(products)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = (e) => {
    console.log('g')
  }

  React.useEffect(() => {
    fetchingProduct()
  }, [])
  return (
    <>
      <div>
        <div className="section ">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <p className="has-text-centered">Product ID</p>
                </th>
                <th>
                  <p className="has-text-centered">Product Name</p>
                </th>
                <th>
                  <p className="has-text-centered">Stock Count</p>
                </th>
                <th>
                  <p className="has-text-centered">Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {productState ? (
                productState.map((product) => {
                  return (
                    <tr key={product._id}>
                      <td>
                        <p className="has-text-centered">{product._id}</p>
                      </td>
                      <td>
                        <p className="has-text-centered">{product.name}</p>
                      </td>
                      <td>
                        <p className="has-text-centered">
                          {product.stockCount}
                        </p>
                      </td>
                      <td>
                        <button
                          className="button is-fullwidth"
                          onClick={handleClick}
                          name={product._id}
                        >
                          Take Action
                        </button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <p>hi</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AdminView
