import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../api/product.js'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((products) => setProducts(products))
  }, [])

  return (
    <>
      <h1>🚨😱 PANIC!!!! 🙀⏰</h1>
      <h1>Products</h1>
      <h3>
        {products.map((product) => {
          return (
            <div key={product._id}>
              <p>{product.name}</p>
              <p>{product.itemDescription}</p>
              <p>{product.brand}</p>
            </div>
          )
        })}
      </h3>
    </>
  )
}

export default Home
