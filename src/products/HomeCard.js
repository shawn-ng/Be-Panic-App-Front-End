import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({
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

        <div className="card-content">
          <h5>{category}</h5>
          <h5>{brand}</h5>
          <h5>{price}</h5>
          <h5>{stockCount} Left</h5>
          {/* <h5>{_id}</h5> */}
        </div>
      </Link>
    </div>
  )
}

export default HomeCard
