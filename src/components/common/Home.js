import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/Api'
import { searchProducts } from '../../api/Api'
import HomeCard from '../products/HomeCard'

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
    })
  }, [])

  return (
    <>
      <section>
        <div className="hero is-fullheight-with-navbar  bg-img">
          <div className="hero-body">
            <div className="column">
              <div className="mb-6 box-title">
                <h1 className="title has-text-centered home-title">
                  Welcome to Paniccc Buyers
                </h1>
              </div>
              <div className="level-item">
                <div className="field has-addons">
                  <form className="level-item" onSubmit={search}>
                    <p className="control">
                      <input
                        className="input is-medium"
                        type="search"
                        placeholder="Start typing.. "
                        onChange={(e) => setQ(e.target.value)}
                        value={q}
                      />
                    </p>
                    <p className="control">
                      <input
                        className="button is-medium"
                        type="submit"
                        value="Search"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="columns is-multiline">
            {products.map((product) => {
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
        </div> */}
      </section>
    </>
  )
}

export default Home
