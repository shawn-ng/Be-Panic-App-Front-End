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
    <div>
      {/* <Link to={`/products/${_id}`}> */}
      <div>
        <div>
          <h4>{name}</h4>
        </div>
      </div>

      <div>
        <figure>
          <img src={image} alt={name} loading="lazy" width="300" height="300" />
        </figure>
      </div>

      <div>
        <h5>By {brand}</h5>
        <h5>£{price}</h5>
        <h5>{stockCount} Left In Stock</h5>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default ProductCard
