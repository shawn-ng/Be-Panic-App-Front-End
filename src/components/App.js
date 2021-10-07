import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './common/NavBar.js'
import Home from './common/Home.js'
import Register from '../auth/Register.js'
import Login from '../auth/Login.js'
import ShowProduct from './common/ShowProduct.js'

import '../styles/styles.scss'
import Products from './common/Products.js'
// const Home = React.lazy(() => import('./common/Home.js'))

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ShowProduct} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
