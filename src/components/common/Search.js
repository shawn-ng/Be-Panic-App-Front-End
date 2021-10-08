import React, { useEffect, useState } from 'react'
import Products from './Products'
import { searchProducts } from '../../api/Api'

const Search = () => {
  const [products, setProducts] = useState([])
  const [q, setQ] = useState('')
  const [availableCategory, setAvailableCategory] = useState([])
  const [visibleCategory, setVisibleCategory] = useState(null)

  const search = function (event) {
    event.preventDefault()
    searchProducts(q).then((products) => setProducts(products))
  }

  useEffect(() => {
    const categories = products
      .map((p) => p.categories)
      .filter((c) => c !== null)
    setAvailableCategory([...new Set(products)])
  }, [products])

  return (
    <>
      <h1>Products</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="e.g Explosives"
          onChange={(e) => setQ(e.target.value)}
          value={q}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        {availableCategory.map((category) => (
          <button onClick={() => setAvailableCategory(category)}>
            {category}
          </button>
        ))}
        <button onClick={() => setVisibleCategory(null)}>Reset</button>
      </div>
      {/* add image to make it nice */}
      <section>
        <h2>All Products</h2>
        <div>
          {products
            .filter((p) => !visibleCategory || p.categories === visibleCategory)
            .map((product) => (
              <Products key={product._id} {...product} />
            ))}
        </div>
      </section>
    </>
  )
}

export default Search
