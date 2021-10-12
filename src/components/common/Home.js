import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/Api'
import { searchProducts } from '../../api/Api'
import HomeCard from '../../products/HomeCard'
import logo from '../images/logo.jpg'

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
      <section className="column">
        <div className="container">
          <h1>Welcome to Paniccc Buyers</h1>
          <img src={logo} alt={logo} className="container" />
        </div>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="e.g Explosives"
            onChange={(e) => setQ(e.target.value)}
            value={q}
          />
          <input type="submit" value="Search" />
        </form>
        <figure className="back-element">
          <img
            className="shopping-image"
            src="https://cdn.corporatefinanceinstitute.com/assets/panic-buying-1024x683.jpeg"
            alt="panic buying"
          />
        </figure>
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
      </section>
    </>
  )
}

export default Home
