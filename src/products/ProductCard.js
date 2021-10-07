import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({
  _id,
  name,
  brand,
  imageUrl,
  price,
  stockCount,
  itemDescription,
  category,
}) => {
  console.log({
    _id,
    name,
    brand,
    imageUrl,
    price,
    stockCount,
    itemDescription,
    category,
  })

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/product/${_id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
        </div>

        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={imageUrl}
              alt={name}
              loading="lazy"
              width="300"
              height="300"
            />
          </figure>
        </div>

        <div className="card-content">
          <h5>{category}</h5>
          <h5>By {brand}</h5>
          <h5>£{price}</h5>
          <h5>{stockCount} Left In Stock</h5>
          <h5>{_id}</h5>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
