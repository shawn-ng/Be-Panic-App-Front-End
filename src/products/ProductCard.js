import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({
  _id,
  name,
  brand,
  image,
  price,
  stockCount,
  itemDescription,
}) => {
  console.log({ _id, name, brand, image, price, stockCount, itemDescription })

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/products/${_id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
        </div>

        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={image}
              alt={name}
              loading="lazy"
              width="300"
              height="300"
            />
          </figure>
        </div>

        <div className="card-content">
          <h5>By {brand}</h5>
          <h5>£{price}</h5>
          <h5>{stockCount} Left In Stock</h5>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
