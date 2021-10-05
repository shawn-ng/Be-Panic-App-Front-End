import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/Api'
import ProductCard from '../../products/ProductCard'

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
        <div className="columns is-multiline">
          {products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                brand={product.brand}
                price={product.price}
                name={product.name}
                imageUrl={product.image.url}
              />
            )
          })}
        </div>
      </h3>
    </>
  )
}

export default Home
