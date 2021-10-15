import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

import { getAllProducts } from '../../api/Api'
import { searchProducts } from '../../api/Api'
import ProductCard from '../products/ProductCard.js'
// import Search from './Search'

const Products = ({ onItemSelect }) => {
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [searched, setSearched] = useState([])
  const [q, setQ] = useState('')

  // const item = searchProducts(searchFromHome)
  // setProducts(item)

  const search = async function (event) {
    event.preventDefault()

    setSearched()

    const item = await searchProducts(q)

    setProducts(item)
  }

  const searchHome = async () => {
    try {
      const item = await searchProducts(location.qHome)
      setSearched(item)
    } catch (err) {
      console.log('error occur from searchHome:', err)
    }
  }

  useEffect(() => {
    searchHome()
    getAllProducts().then((products) => setProducts(products))
  }, [])

  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <h4 className="subtitle">
              All your essentials for when disaster strikes
            </h4>
          </div>
          <div className="column is-half">
            <div className="level-item ">
              <div className="field has-addons">
                <form className="level-item" onSubmit={search}>
                  <p className="control">
                    <input
                      className="input"
                      type="search"
                      placeholder="Start typing.. "
                      onChange={(e) => {
                        setQ(e.target.value)
                      }}
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
      </div>

      <div className="columns is-multiline">
        {searched
          ? searched.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  brand={product.brand}
                  price={product.price}
                  name={product.name}
                  imageUrl={product.image.url}
                  stockCount={product.stockCount}
                  _id={product._id}
                  onItemSelect={onItemSelect}
                />
              )
            })
          : products.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  brand={product.brand}
                  price={product.price}
                  name={product.name}
                  imageUrl={product.image.url}
                  stockCount={product.stockCount}
                  _id={product._id}
                  onItemSelect={onItemSelect}
                />
              )
            })}
      </div>
    </>
  )
}

export default Products
