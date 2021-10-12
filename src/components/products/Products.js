import React from 'react'
import styles from '../products/Products.module.css'

// Redux imports

import { connect } from 'react-redux'

import Product from './productCard/ProductCard.js'

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)
