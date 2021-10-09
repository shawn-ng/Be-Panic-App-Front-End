import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './common/NavBar.js'
import Home from './common/Home.js'
import Products from './common/Products.js'
import ShowProduct from './common/ShowProduct.js'
import Register from '../auth/Register.js'
import Login from '../auth/Login.js'

import '../styles/styles.scss'
// const Home = React.lazy(() => import('./common/Home.js'))

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ShowProduct} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
