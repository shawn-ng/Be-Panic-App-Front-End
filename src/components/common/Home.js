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
      <section>
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="column">
              <h1 className="title">Welcome to Paniccc Buyers</h1>
              <div className="level-item">
                <div className="field has-addons">
                  <form className="level-item" onSubmit={search}>
                    <p className="control">
                      <input
                        className="input"
                        type="search"
                        placeholder="Start typing.. "
                        onChange={(e) => setQ(e.target.value)}
                        value={q}
                      />
                    </p>
                    <p className="control">
                      <input className="button" type="submit" value="Search" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <figure className="hero-body">
            <img
              className="shopping-image"
              src="https://cdn.corporatefinanceinstitute.com/assets/panic-buying-1024x683.jpeg"
              alt="panic buying"
            />
          </figure>
        </div>
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
