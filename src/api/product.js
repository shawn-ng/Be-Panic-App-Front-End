import axios from 'axios' // remove axios when hosting and replace with request
// import request from './request';

export const getAllProducts = async () => {
  const options = { method: 'GET', url: '/api/products' }

  const { data } = await axios.request(options)
  return data
}

export const createProducts = async (newProduct) => {
  const options = {
    method: 'POST',
    url: '/api/movies',
    body: newProduct,
  }
  const { data } = await axios.request(options)
}

export const getProduct = async (id) => {
  const options = { method: 'GET', url: `/api/product/${id}` }

  const { data } = await axios.request(options)
  return data
}
