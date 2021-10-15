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
  onItemSelect,
}) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile is-vcentered">
      <Link to={`/product/${_id}`}>
        <div className="card">
          <div className="card-header has-background-light">
            {/* <h4 className="card-header-title has-text-centered">{name}</h4> */}
            <h4 className="card-header-title">
              {name.length >= 24 ? name.slice(0, 24) + '...' : name}
            </h4>
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
        <div className="notification link-focus-border has-background-light">
          <h5>£{price}</h5>

          <h5>{stockCount} Left In Stock</h5>

          <button
            className="button is-fullwidth mt-4 is-warning"
            onClick={() =>
              onItemSelect({
                _id,
                name,
                brand,
                imageUrl,
                price,
                stockCount,
                itemDescription,
                category,
                onItemSelect,
              })
            }
          >
            Buy
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
