import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/Api'
import { searchProducts } from '../../api/Api'
import HomeCard from '../../products/HomeCard'

const Home = () => {
  const [products, setProducts] = useState([])
  const [q, setQ] = useState('')

  const search = async function (event) {
    event.preventDefault()
    const item = await searchProducts(q)

    setProducts(item)
  }

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products)
      console.log('this is to log the product', products)
    })
  }, [])

  return (
    <>
      <h1>🚨😱 PANIC!!!! 🙀⏰</h1>
      <h1>Products</h1>
      <h1>Search</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="e.g Explosives"
          onChange={(e) => setQ(e.target.value)}
          value={q}
        />
        <input type="submit" value="Search" />
      </form>
      <h3>
        <div className="columns is-multiline">
          {products.map((product) => {
            // ? {product.stockCount < 10} :
            // return <p>Running Low</p>
            return product.stockCount < 10 ? (
              <HomeCard
                key={product._id}
                category={product.category}
                stockCount="Running low"
                _id={product._id}
              />
            ) : (
              <HomeCard
                key={product._id}
                category={product.category}
                stockCount={product.stockCount}
                _id={product._id}
              />
            )
          })}
        </div>
      </h3>
    </>
  )
}

export default Home
