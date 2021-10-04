import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../api/product.js'
import ProductCard from '../products/ProductCard.js'

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
            <ProductCard
              key={product._id}
              brand={product.brand}
              price={product.price}
              name={product.name}
            />
          )
        })}
      </h3>
    </>
  )
}

export default Home
