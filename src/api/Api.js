import axios from 'axios' // remove axios when hosting and replace with request
// import request from './request';

// build out api endpoints + routes like in cheeseboard

const baseUrl = 'http://localhost:8001/'

export const getAllProducts = async () => {
  const options = { method: 'GET', url: `/api/product` }

  const { data } = await axios.request(options)
  return data
}

export const getSingleProduct = async (id) => {
  const data = await axios.get(`/api/product/${id}`)

  return data
}

export const createProducts = async (newProduct) => {
  const options = {
    method: 'POST',
    url: '/api/product',
    body: newProduct,
  }
  const { data } = await axios.request(options)
  return data
}

// export const getProduct = async (id) => {
//   const options = { method: 'GET', url: `/api/product/${id}` }

//   const { data } = await axios.request(options)
//   return data
// }

export const editProduct = (id, formData) => {
  // add in admin access here and token, will need to update with secureRoute + admin check
  //   const requestConfig = {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   }

  //   add request config here
  //   return axios.put(`${baseUrl}/product/${id}`, formData, requestConfig)
  return axios.put(`${baseUrl}/product/${id}`, formData, requestConfig)
}

export const deleteProduct = (id) => {
  // add in admin access here and token, will need to update with secureRoute + admin check
  //   const requestConfig = {
  //     headers: { Authorization: `Bearer ${getToken()}` },
  //   }

  return axios.delete(`${baseUrl}product/${id}`) // add requestConfig here
}

export const registerUser = (formData) => {
  return axios.post(`/api/register`, formData)
}

export const loginUser = (formData) => {
  return axios.post(`/api/login`, formData)
}
